export interface Term {
    id: string;
    term: string;
    definition: string;
    example?: string;
    category: string;
}

export interface DictionaryState {
    terms: Term[];
    searchQuery: string;
    isLoading: boolean;
    error?: string;
}