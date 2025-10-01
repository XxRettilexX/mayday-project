import React from 'react';
import { useParams } from 'react-router-dom';
import { useGuideDetailVm } from '../viewmodels/useAmministrativeVm';
import { StepByStep } from '../components/Administrative/StepByStep';
import { FAQSection } from '../components/Administrative/FAQSection';

export const GuideDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { guide, loading } = useGuideDetailVm(id);

    if (loading) return <main><p style={{ fontSize: '18px' }}>Caricamento guida…</p></main>;
    if (!guide) return <main><p style={{ fontSize: '18px' }}>Guida non trovata.</p></main>;

    return (
        <main className="page guide-detail" aria-labelledby="guide-title">
            <h1 id="guide-title">{guide.titolo}</h1>
            <p style={{ fontSize: '18px' }}>Tempo stimato: {guide.tempoStimato} minuti</p>
            <p style={{ fontSize: '18px' }}>Prerequisiti: {guide.prerequisiti.join(', ')}</p>

            <StepByStep passi={guide.passi} />
            <FAQSection faqs={guide.domandeFrequenti} />

            <section aria-labelledby="support-title">
                <h4 id="support-title">Contatti di supporto</h4>
                <ul>
                    {guide.contattiSupporto.map((c, i) => (
                        <li key={i} style={{ fontSize: '18px' }}>
                            <strong>{c.nome}</strong> {c.telefono ? `• Tel: ${c.telefono}` : ''} {c.link ? <a href={c.link}>{c.link}</a> : ''}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};
