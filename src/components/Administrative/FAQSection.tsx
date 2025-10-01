import React from 'react';
import { type FAQ } from '../../types/administrative';

export const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
    return (
        <section aria-labelledby="faq-title">
            <h4 id="faq-title">Domande frequenti</h4>
            <dl>
                {faqs.map((f, i) => (
                    <div key={i}>
                        <dt style={{ fontWeight: '600', fontSize: '18px' }}>{f.domanda}</dt>
                        <dd style={{ marginLeft: '0', fontSize: '18px' }}>{f.risposta}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
};
