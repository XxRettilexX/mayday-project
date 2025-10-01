import React from 'react';
import { type GuideStep } from '../../types/administrative';

export const StepByStep: React.FC<{ passi: GuideStep[] }> = ({ passi }) => {
    return (
        <section aria-labelledby="steps-title">
            <h4 id="steps-title">Passi</h4>
            <ol>
                {passi.map(p => (
                    <li key={p.ordine} style={{ fontSize: '18px', marginBottom: '12px' }}>
                        <strong>{p.ordine}. {p.titolo}</strong>
                        <p>{p.descrizione}</p>
                        {p.avvertenze && <p aria-live="polite" style={{ color: '#a00' }}>Avvertenza: {p.avvertenze}</p>}
                        <p><em>Come verificare: {p.verifica}</em></p>
                    </li>
                ))}
            </ol>
        </section>
    );
};
