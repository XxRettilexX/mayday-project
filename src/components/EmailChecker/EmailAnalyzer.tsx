import React from 'react';
import { useEmailCheckVm } from '../../viewmodels/useEmailCheckVm';

export const EmailAnalyzer: React.FC = () => {
    const { input, setInput, runAnalysis, reset, loading } = useEmailCheckVm();

    return (
        <section aria-labelledby="email-check-title" className="email-check">
            <h2 id="email-check-title">Controllo semplice delle email</h2>

            <label htmlFor="mittente" className="sr-only">Mittente</label>
            <input
                id="mittente"
                aria-label="Mittente dell'email"
                placeholder="Esempio: Banco <noreply@banco-xxxxx.com>"
                value={input.mittente}
                onChange={e => setInput({ ...input, mittente: e.target.value })}
                style={{ fontSize: '18px' }}
            />

            <label htmlFor="oggetto" className="sr-only">Oggetto</label>
            <input
                id="oggetto"
                aria-label="Oggetto dell'email"
                placeholder="Oggetto (opzionale)"
                value={input.oggetto}
                onChange={e => setInput({ ...input, oggetto: e.target.value })}
                style={{ fontSize: '18px' }}
            />

            <label htmlFor="testo">Testo dell'email</label>
            <textarea
                id="testo"
                aria-label="Testo dell'email da analizzare"
                placeholder="Incolla qui il testo dell'email..."
                value={input.testo}
                onChange={e => setInput({ ...input, testo: e.target.value })}
                rows={8}
                style={{ fontSize: '18px' }}
            />

            <div className="actions">
                <button
                    onClick={() => runAnalysis()}
                    disabled={loading}
                    aria-disabled={loading}
                    className="btn primary"
                >
                    {loading ? 'Analizzo…' : 'Analizza email'}
                </button>
                <button onClick={() => reset()} className="btn secondary">Pulisci</button>
            </div>
        </section>
    );
};
