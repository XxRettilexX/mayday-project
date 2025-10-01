import React from 'react';
import { type Guide } from '../../types/administrative';
import { Link } from 'react-router-dom';

export const GuideCard: React.FC<{ guide: Guide }> = ({ guide }) => {
    return (
        <article className="guide-card" aria-labelledby={`guide-${guide.id}`}>
            <h3 id={`guide-${guide.id}`} style={{ fontSize: '20px' }}>{guide.titolo}</h3>
            <p style={{ fontSize: '18px' }}>Difficoltà: {guide.difficolta} • Tempo: {guide.tempoStimato} min</p>
            <p style={{ fontSize: '18px' }}>Prerequisiti: {guide.prerequisiti.join(', ')}</p>
            <Link to={`/guide/${guide.id}`} className="btn small" aria-label={`Apri guida ${guide.titolo}`}>Apri guida</Link>
        </article>
    );
};
