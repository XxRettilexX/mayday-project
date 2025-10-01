import { type EmailAnalysis, type RawEmailInput } from '../types/email';

// Parole di urgenza comunemente usate nei phishing
const URGENCY_WORDS = [
    'urgente', 'immediato', 'scadenza', 'ultimo avviso', 'azione richiesta', 'sospeso', 'bloccat'
];

// Domini ufficiali di esempio (puoi estenderli)
const KNOWN_OFFICIAL_DOMAINS = [
    'posta.it', 'inps.it', 'paypal.com', 'poste.it', 'intesa.it', 'unicredit.it', 'amazon.it', 'amazon.com'
];

function extractDomainFromEmail(mittente: string): string | null {
    const match = mittente.match(/@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    return match ? match[1].toLowerCase() : null;
}

function findLinks(text: string): string[] {
    const urlRegex = /https?:\/\/[^\s)>\]]+/gi;
    return (text.match(urlRegex) || []).map(s => s.trim());
}

function containsSensitiveRequest(text: string): boolean {
    const patterns = [
        /numero di carta/i,
        /codice fiscale/i,
        /password/i,
        /pin/i,
        /iban/i,
        /dati personali/i,
        /accedi qui/i,
        /clicca qui per/i
    ];
    return patterns.some(p => p.test(text));
}

export async function analyzeEmail(email: RawEmailInput): Promise<EmailAnalysis> {
    // Simula latenza breve
    await new Promise(r => setTimeout(r, 300));

    const fattori: string[] = [];
    const suggerimenti: string[] = [];
    const unsafeLinks: string[] = [];

    const domain = extractDomainFromEmail(email.mittente);
    if (!domain) {
        fattori.push('Mittente senza dominio verificabile');
    } else {
        // controllo dominio simile a officiali (sospetto)
        const known = KNOWN_OFFICIAL_DOMAINS;
        const isKnown = known.includes(domain);
        if (!isKnown) {
            // controllo somiglianza semplice (es. "intesa-bank.com" vs "intesa.it")
            const similar = known.find(d => d.includes(domain.split('.')[0]) || domain.includes(d.split('.')[0]));
            if (similar) {
                fattori.push(`Il dominio del mittente somiglia a uno ufficiale (${domain})`);
            } else {
                fattori.push(`Dominio non familiare: ${domain}`);
            }
        }
    }

    // link
    const links = findLinks(email.testo || '');
    if (links.length > 0) {
        fattori.push(`Contiene ${links.length} link: evita di cliccare se non sei sicuro.`);
        // segnala link non ufficiali
        const unsafeLinks = links.filter(l => !KNOWN_OFFICIAL_DOMAINS.some(d => l.includes(d)));
        if (unsafeLinks.length > 0) {
            fattori.push(`Link che non appartengono a servizi ufficiali: ${unsafeLinks.slice(0, 3).join(', ')}`);
        }
    }

    // linguaggio di urgenza
    const bodyLower = (email.testo || '').toLowerCase();
    const urgencyMatches = URGENCY_WORDS.filter(w => bodyLower.includes(w));
    if (urgencyMatches.length) {
        fattori.push('Linguaggio che crea urgenza: usa parole che spingono ad agire subito.');
    }

    // richiesta dati sensibili
    if (containsSensitiveRequest(email.testo || '')) {
        fattori.push('Richiesta di dati sensibili (password, PIN, ecc.). Non fornire mai questi dati via email.');
    }

    // livello pericolo semplice: contiamo fattori
    const score = Math.min(5, Math.max(1, fattori.length + (unsafeLinks.length ? 1 : 0) + (urgencyMatches.length ? 1 : 0)));
    let sicurezza: EmailAnalysis['sicurezza'] = 'alta';
    if (score >= 4) sicurezza = 'bassa';
    else if (score >= 2) sicurezza = 'media';
    else sicurezza = 'alta';

    // Suggerimenti semplici e rassicuranti
    if (sicurezza === 'bassa') {
        suggerimenti.push(
            'Non rispondere a questa email.',
            'Non cliccare sui link e non scaricare allegati.',
            'Se sembra dalla tua banca, contatta la banca usando il numero sul retro della carta o il sito ufficiale.',
            'Elimina il messaggio o spostalo in spam.'
        );
    } else if (sicurezza === 'media') {
        suggerimenti.push(
            'Non cliccare subito: passa il mouse sui link per vedere dove portano.',
            'Controlla mittente e dominio con attenzione.',
            'Se hai dubbi, chiedi aiuto a qualcuno di fidato o usa il servizio d’aiuto qui nell’app.'
        );
    } else {
        suggerimenti.push('Sembra legittima, ma resta prudente: non condividere mai password o PIN.');
    }

    // Messaggio rassicurante aggiuntivo
    suggerimenti.push('Se non sei sicuro, conserva lo screenshot e chiedi supporto (es. un familiare o il centro assistenza comunale).');

    return {
        sicurezza,
        fattoriRischio: fattori,
        suggerimenti,
        livelloPericolo: score as 1 | 2 | 3 | 4 | 5
    };
}
