import { useEffect } from "react"
import { useDictionaryVm } from "../viewmodels/useDictionaryVm"
import TermCard from "../components/Dictionary/TermCards"

export default function Dictionary() {
    const { terms, isLoading, searchQuery, setSearchQuery, loadTerms, error } = useDictionaryVm()

    useEffect(() => {
        loadTerms()
    }, [loadTerms])

    return (
        <div>

            <h2>Dizionario degli Slang Web</h2>

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cerca un termine..."
            />

            {isLoading && <p>Caricamento...</p>}
            {error && <p className="error">Errore: {error}</p>}

            <div className="terms-list">
                {terms.map(term => (
                    <TermCard key={term.id} term={term} />
                ))}
            </div>

            {terms.length === 0 && !isLoading && (
                <p>Nessun termine trovato. Prova con una ricerca diversa.</p>
            )}
        </div>
    )
}