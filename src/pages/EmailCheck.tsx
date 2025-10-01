import React from 'react';
import { EmailAnalyzer } from '../components/EmailChecker/EmailAnalyzer';
import { ResultDisplay } from '../components/EmailChecker/ResultDisplay';
import { useEmailCheckVm } from '../viewmodels/useEmailCheckVm';

export const EmailCheckPage: React.FC = () => {
    const vm = useEmailCheckVm();

    return (
        <main className="page email-page" aria-labelledby="page-title">
            <h1 id="page-title">Controllo Email - MayDay</h1>
            <p style={{ fontSize: '18px' }}>
                Incolla qui il testo di una email sospetta. Lʼanalisi usa regole semplici per aiutarti a decidere.
            </p>

            <div className="grid">
                <div>
                    <EmailAnalyzer />
                </div>

                <div>
                    <ResultDisplay analysis={vm.analysis} />
                </div>
            </div>

            {vm.error && <div role="alert" style={{ color: 'red', fontSize: '18px' }}>{vm.error}</div>}
        </main>
    );
};
const EmailCheck = () => {
    return <div>Email Check</div>
}
export default EmailCheck