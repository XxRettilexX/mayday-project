import { type EmailCheckResult } from "../../types/email"

interface EmailCheckerProps {
    email: string;
    onCheck: (email: string) => void;
    result?: EmailCheckResult;
    isLoading: boolean;
}

export default function EmailChecker({ email, onCheck, result, isLoading }: EmailCheckerProps) {
    const getStatusClass = (status?: string) => {
        switch (status) {
            case 'safe': return 'safe';
            case 'suspicious': return 'suspicious';
            case 'scam': return 'scam';
            default: return '';
        }
    }

    return (
        <div className="email-checker">
            <h3>Controllo sicurezza email</h3>
            <input
                type="email"
                value={email}
                onChange={(e) => onCheck(e.target.value)}
                placeholder="Inserisci l'email da verificare"
            />
            {isLoading && <p>Verifica in corso...</p>}
            {result && (
                <div className={`result ${getStatusClass(result.status)}`}>
                    <p>{result.message}</p>
                    {result.details && <p className="details">{result.details}</p>}
                </div>
            )}
        </div>
    )
}