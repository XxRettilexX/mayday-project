import type { Term } from "../../types/dictionary";

interface TermCardProps {
    term: Term;
}

export default function TermCard({ term }: TermCardProps) {
    return (
        <article className="term-card">
            <h3>{term.term}</h3>
            <p><strong>Significato:</strong> {term.definition}</p>
            {term.example && <p><strong>Esempio:</strong> {term.example}</p>}
            <span className="category-badge">{term.category}</span>
        </article>
    )
}

