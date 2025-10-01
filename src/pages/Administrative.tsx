import React from 'react';
import { GuideCard } from '../components/Administrative/GuideCard';
import { useAdministrativeVm } from '../viewmodels/useAmministrativeVm';

export const AdministrativePage: React.FC = () => {
    const { guides, loading } = useAdministrativeVm();

    return (
        <main className="page admin-page" aria-labelledby="admin-page-title">
            <h1 id="admin-page-title">Guide pratiche - MayDay</h1>
            <p style={{ fontSize: '18px' }}>Scegli una guida semplice per completare una pratica online. Troverai passi chiari e supporto.</p>

            {loading ? <p style={{ fontSize: '18px' }}>Caricamento…</p> : (
                <div className="grid-cards">
                    {guides.map(g => <GuideCard key={g.id} guide={g} />)}
                </div>
            )}
        </main>
    );
};
const Administrative = () => {
    return <div>Administrative</div>
}
export default Administrative