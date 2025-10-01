import { type Guide } from '../types/administrative';

export const mockGuides: Guide[] = [
    {
        id: 'spid-guide',
        titolo: 'Come attivare SPID (livello 2)',
        difficolta: 2,
        tempoStimato: 20,
        prerequisiti: ['Carta dʼidentità', 'Codice fiscale', 'Email personale', 'Telefono con documento'],
        passi: [
            {
                ordine: 1,
                titolo: 'Scegli un fornitore SPID',
                descrizione: 'Vai alla lista ufficiale dei provider SPID (es. Poste, Aruba, Infocert) e scegli quello che preferisci.',
                verifica: 'Hai selezionato un provider dalla lista ufficiale.',
            },
            {
                ordine: 2,
                titolo: 'Crea un account presso il provider',
                descrizione: 'Inserisci i tuoi dati: nome, cognome, codice fiscale e email. Segui le istruzioni del provider.',
                verifica: 'Ricevi un codice di conferma via SMS o email.',
            },
            {
                ordine: 3,
                titolo: 'Verifica la tua identità',
                descrizione: 'Scegli la verifica online (video) o con la Carta dʼIdentità elettronica se disponibile. Segui le istruzioni in modo calmo.',
                avvertenze: 'Tieni il documento vicino: la camera mostrerà il documento e ti farà alcuni movimenti semplici.',
                verifica: 'Ricevi conferma del provider che lʼidentità è verificata.'
            },
            {
                ordine: 4,
                titolo: 'Scegli username e password',
                descrizione: 'Imposta una password sicura che ricordi ma che non condividi con nessuno.',
                verifica: 'Riesci a fare il login al sito del provider con le nuove credenziali.'
            }
        ],
        domandeFrequenti: [
            { domanda: 'Quanto costa?', risposta: 'Molti provider offrono SPID gratuitamente per i cittadini.' },
            { domanda: 'Posso farlo da solo?', risposta: 'Sì, ma chiedi aiuto se non ti senti sicuro.' }
        ],
        contattiSupporto: [
            { nome: 'Centro SPID - Comune', telefono: '800-123-456', link: 'https://www.spid.gov.it' }
        ]
    },
    // Aggiungi altre guide (PEC, INPS, Fascicolo Sanitario) qui
    {
        id: 'pec-guide',
        titolo: 'Come creare una PEC',
        difficolta: 2,
        tempoStimato: 15,
        prerequisiti: ['Documento di riconoscimento', 'Codice fiscale', 'Email normale'],
        passi: [
            {
                ordine: 1,
                titolo: 'Scegli un provider PEC',
                descrizione: 'Cerca "registrazione PEC" e seleziona un provider certificato (es. Aruba, Legalmail).',
                verifica: 'Hai scelto un provider e sei sulla pagina di registrazione.'
            },
            {
                ordine: 2,
                titolo: 'Compila la registrazione',
                descrizione: 'Inserisci i tuoi dati personali e carica il documento richiesto.',
                verifica: 'Ricevi una email di conferma dal provider.'
            }
        ],
        domandeFrequenti: [
            { domanda: 'La PEC ha valore legale?', risposta: 'Sì, la PEC equivale a una raccomandata con ricevuta.' }
        ],
        contattiSupporto: [{ nome: 'Aiuto Comune', telefono: '800-654-321' }]
    }
];
export async function fetchGuides(): Promise<Guide[]> {
    // Simulazione chiamata
    await new Promise(r => setTimeout(r, 250));
    return mockGuides;
}

export async function fetchGuideById(id: string): Promise<Guide | null> {
    const list = await fetchGuides();
    return list.find(g => g.id === id) ?? null;
}
