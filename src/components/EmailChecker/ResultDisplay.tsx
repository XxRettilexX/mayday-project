import React from 'react';
import { type EmailAnalysis } from '../../types/email';

function livelloToColor(l: number) {
    if (l >= 4) return 'red';
    if (l >= 2) return 'orange';
    return 'green';
}

export const ResultDisplay: React.FC<{ analysis: EmailAnalysis | null }> = ({ analysis }) => {
    if (!analysis) {
        return <div aria-live="polite">Nessuna analisi effettuata.</div>;
    }

    const color = livelloToColor(analysis.livelloPericolo);

    return (
        <aside aria-labelledby="result-title" className="result-display" role="region">
            <h3 id="result-title">Risultato analisi</h3>
            <div className="semaforo" aria-hidden>
                <div className={`dot ${color}`} title={`Livello pericolo ${analysis.livelloPericolo}`}></div>
                <div className="summary" style={{ fontSize: '18px' }}>
                    <strong>Livello sicurezza:</strong> {analysis.sicurezza.toUpperCase()}
                </div>
            </div>

            <div className="factors" aria-live="polite">
                <h4>Perché questo risultato?</h4>
                <ul>
                    {analysis.fattoriRischio.map((f, i) => (
                        <li key={i} style={{ fontSize: '18px' }}>{f}</li>
                    ))}
                </ul>
            </div>

            <div className="suggestions">
                <h4>Consigli pratici</h4>
                <ol>
                    {analysis.suggerimenti.map((s, i) => (
                        <li key={i} style={{ fontSize: '18px' }}>{s}</li>
                    ))}
                </ol>
            </div>
        </aside>
    );
};
