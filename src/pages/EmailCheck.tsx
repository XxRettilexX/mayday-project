import React, { useState } from "react";
import "./EmailCheck.css"

interface EmailResult {
    valid: boolean;
    error?: string;
}

const EmailCheck: React.FC = () => {
    const [emailText, setEmailText] = useState("");
    const [result, setResult] = useState<EmailResult | null>(null);
    const [loading, setLoading] = useState(false);


    const analyzeEmail = (text: string) => {
        setLoading(true);
        setResult(null);

        setTimeout(() => {
            const lowered = text.toLowerCase();
            const suspiciousTerms = [
                // Richieste urgenti
                "urgente",
                "immediato",
                "subito",
                "entro 24 ore",
                "entro 48 ore",
                "azione immediata",

                // Dati sensibili
                "password",
                "pin",
                "codice fiscale",
                "numero di carta",
                "iban",
                "cvc",
                "otp",
                "codice di sicurezza",

                // Azioni sospette
                "clicca qui",
                "click here",
                "accedi subito",
                "reset password",
                "verifica account",
                "aggiorna le tue informazioni",

                // Promesse esagerate
                "hai vinto",
                "complimenti",
                "premio",
                "lotteria",
                "bonus",
                "offerta esclusiva",
                "regalo",

                // Minacce
                "il tuo account sarà bloccato",
                "sospensione immediata",
                "verifica obbligatoria",
                "perdita definitiva",
                "accesso non autorizzato",

                // Link sospetti
                "http://",
                "https://",
                ".ru",
                ".cn",
                ".tk",
                ".ml",
                ".xyz",

                // Banche e istituzioni (comuni nei fake)
                "paypal",
                "poste italiane",
                "unicredit",
                "intesa sanpaolo",
                "inps",
                "agenzia delle entrate",
            ];


            const found = suspiciousTerms.filter((term) => lowered.includes(term));

            if (found.length > 0) {
                setResult({
                    valid: false,
                    error: `⚠️ Questa email contiene elementi sospetti: ${found.join(", ")}`,
                });
            } else {
                setResult({
                    valid: true,
                });
            }

            setLoading(false);
        }, 1000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        analyzeEmail(emailText);
    };

    return (
        <div className="emailcheck-page">
            <h1 className="text-2xl font-bold mb-4">Controllo Email</h1>
            <form onSubmit={handleSubmit} className="emailcheck-form">
                <textarea
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    placeholder="Incolla qui il testo della mail..."
                    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={6}
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? "Analisi in corso..." : "Analizza"}
                </button>
            </form>

            {result && (
                <div
                    className={`email-result ${result.valid ? "safe" : "danger"}`}
                >
                    {result.valid ? "✅ Questa email sembra sicura." : result.error}
                </div>

            )}
        </div>
    );
};

export default EmailCheck;
