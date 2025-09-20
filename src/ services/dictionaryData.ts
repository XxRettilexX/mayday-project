import { type Term } from "../types/dictionary"

// Dati mock per il dizionario
const mockTerms: Term[] = [
    {
        id: "1",
        term: "Scam",
        definition: "Truffa online, tentativo di frode",
        example: "Quella email che promette un premio è uno scam",
        category: "Sicurezza"
    },
    {
        id: "2",
        term: "Phishing",
        definition: "Tentativo di rubare informazioni personali fingendosi un'entità affidabile",
        example: "Hanno fatto phishing dei miei dati bancari",
        category: "Sicurezza"
    },
    {
        id: "3",
        term: "SPID",
        definition: "Sistema Pubblico di Identità Digitale",
        example: "Per accedere ai servizi pubblici online devi avere SPID",
        category: "Servizi"
    }
]

export const getTerms = async (): Promise<Term[]> => {
    // Simula una chiamata API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockTerms)
        }, 500)
    })
}

export const searchTerms = (terms: Term[], query: string): Term[] => {
    if (!query) return terms
    const lowerQuery = query.toLowerCase()
    return terms.filter(term =>
        term.term.toLowerCase().includes(lowerQuery) ||
        term.definition.toLowerCase().includes(lowerQuery)
    )
}