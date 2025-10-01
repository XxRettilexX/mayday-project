import { useState } from 'react';
import { type RawEmailInput, type EmailAnalysis } from '../types/email';
import { analyzeEmail } from '../ services/emailCheckerService';

export function useEmailCheckVm() {
    const [input, setInput] = useState<RawEmailInput>({ mittente: '', testo: '', oggetto: '' });
    const [analysis, setAnalysis] = useState<EmailAnalysis | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function runAnalysis() {
        setError(null);
        setLoading(true);
        try {
            const res = await analyzeEmail(input);
            setAnalysis(res);
        } catch (e) {
            setError('Si è verificato un errore nellʼanalisi. Riprova più tardi.');
        } finally {
            setLoading(false);
        }
    }

    function reset() {
        setInput({ mittente: '', testo: '', oggetto: '' });
        setAnalysis(null);
        setError(null);
    }

    return {
        input,
        setInput,
        analysis,
        loading,
        error,
        runAnalysis,
        reset
    };
}
