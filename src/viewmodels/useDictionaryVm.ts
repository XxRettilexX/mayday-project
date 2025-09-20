import { useState, useMemo, useCallback } from "react"
import { getTerms, searchTerms } from "../ services/dictionaryData"
import type { DictionaryState } from "../types/dictionary";

export function useDictionaryVm(): DictionaryState & {
    setSearchQuery: (query: string) => void;
    loadTerms: () => Promise<void>;
} {
    const [state, setState] = useState<DictionaryState>({
        terms: [],
        searchQuery: "",
        isLoading: false,
        error: undefined
    })

    const filteredTerms = useMemo(() => {
        if (!state.searchQuery) return state.terms
        return searchTerms(state.terms, state.searchQuery)
    }, [state.terms, state.searchQuery])

    const loadTerms = useCallback(async () => {
        setState(prev => ({ ...prev, isLoading: true, error: undefined }))
        try {
            const data = await getTerms()
            setState(prev => ({ ...prev, terms: data, isLoading: false }))
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto"
            setState(prev => ({ ...prev, error: errorMessage, isLoading: false }))
        }
    }, [])

    const setSearchQuery = useCallback((query: string) => {
        setState(prev => ({ ...prev, searchQuery: query }))
    }, [])

    return {
        terms: filteredTerms,
        searchQuery: state.searchQuery,
        isLoading: state.isLoading,
        error: state.error,
        setSearchQuery,
        loadTerms
    }
}