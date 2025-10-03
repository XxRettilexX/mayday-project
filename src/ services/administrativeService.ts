import { type Guide } from '../types/administrative';

export const mockGuides: Guide[] = [
    {
        id: 'spid-guide',
        titolo: 'Come attivare SPID (livello 2) – guida super facile',
        difficolta: 1,
        tempoStimato: 20,
        prerequisiti: ['Carta d’identità', 'Codice fiscale', 'Email', 'Telefono con documento'],
        passi: [
            { ordine: 1, titolo: 'Apri la lista dei provider SPID', descrizione: 'Vai sul sito ufficiale SPID. Scegli uno dei nomi: Poste, Aruba, Infocert.', verifica: 'Vedi la pagina del provider scelto.' },
            { ordine: 2, titolo: 'Crea il tuo account', descrizione: 'Inserisci nome, cognome, codice fiscale e email. Segui i pulsanti passo passo.', verifica: 'Hai ricevuto un codice di conferma via SMS o email.' },
            { ordine: 3, titolo: 'Verifica la tua identità', descrizione: 'Segui le istruzioni. Se serve la carta d’identità, tienila vicino e mostra quello che chiede la webcam.', avvertenze: 'Non farti prendere dal panico.', verifica: 'Il provider conferma che l’identità è verificata.' },
            { ordine: 4, titolo: 'Crea username e password', descrizione: 'Scegli username e password facili da ricordare ma sicure. Non condividerle con nessuno.', verifica: 'Riesci a fare login sul sito del provider.' }
        ],
        domandeFrequenti: [
            { domanda: 'Quanto costa?', risposta: 'Di solito è gratis.' },
            { domanda: 'Posso farlo da solo?', risposta: 'Sì! Ma chiedi aiuto se ti blocchi.' }
        ],
        contattiSupporto: [
            { nome: 'Centro SPID - Comune', telefono: '800-123-456', link: 'https://www.spid.gov.it' }
        ]
    },
    {
        id: 'pec-guide',
        titolo: 'Come creare una PEC – guida super facile',
        difficolta: 1,
        tempoStimato: 15,
        prerequisiti: ['Documento di riconoscimento', 'Codice fiscale', 'Email normale'],
        passi: [
            { ordine: 1, titolo: 'Scegli un provider PEC', descrizione: 'Cerca "registrazione PEC" e seleziona un provider certificato (Aruba, Legalmail).', verifica: 'Sei sulla pagina di registrazione.' },
            { ordine: 2, titolo: 'Compila la registrazione', descrizione: 'Inserisci i tuoi dati personali e carica il documento richiesto.', verifica: 'Ricevi una email di conferma dal provider.' }
        ],
        domandeFrequenti: [
            { domanda: 'La PEC ha valore legale?', risposta: 'Sì, equivale a una raccomandata con ricevuta.' }
        ],
        contattiSupporto: [
            { nome: 'Aiuto Comune', telefono: '800-654-321' }
        ]
    },
    {
        id: 'inps-guide',
        titolo: 'Come accedere al portale INPS – guida super facile',
        difficolta: 1,
        tempoStimato: 10,
        prerequisiti: ['SPID livello 2 o PIN INPS', 'Computer o smartphone', 'Internet'],
        passi: [
            { ordine: 1, titolo: 'Apri il sito INPS', descrizione: 'Vai su www.inps.it e clicca "Accedi".', verifica: 'Vedi la pagina di login.' },
            { ordine: 2, titolo: 'Scegli SPID o PIN', descrizione: 'Clicca sul metodo che possiedi e inserisci i dati.', verifica: 'Accedi alla tua area personale.' },
            { ordine: 3, titolo: 'Esplora il portale', descrizione: 'Clicca su "Prestazioni" o "Consultazioni" per vedere le informazioni che ti servono.', verifica: 'Riesci a leggere le tue informazioni.' }
        ],
        domandeFrequenti: [
            { domanda: 'Serve SPID?', risposta: 'Sì, è il modo più semplice per entrare.' }
        ],
        contattiSupporto: [
            { nome: 'INPS - Assistenza', telefono: '803-164', link: 'https://www.inps.it/assistenza' }
        ]
    },
    {
        id: 'bonus-guide',
        titolo: 'Come richiedere bonus digitali – guida super facile',
        difficolta: 1,
        tempoStimato: 15,
        prerequisiti: ['Accesso a SPID', 'Computer o smartphone', 'Email attiva'],
        passi: [
            { ordine: 1, titolo: 'Trova il bonus disponibile', descrizione: 'Vai sul sito ufficiale del governo o INPS e guarda la lista dei bonus.', verifica: 'Vedi il bonus che ti interessa.' },
            { ordine: 2, titolo: 'Compila il modulo online', descrizione: 'Inserisci i tuoi dati passo passo, seguendo le istruzioni sul sito.', verifica: 'Ricevi conferma che la domanda è stata inviata.' },
            { ordine: 3, titolo: 'Aspetta conferma', descrizione: 'Il sito ti invierà una email o messaggio quando la domanda sarà accettata.', verifica: 'Ricevi la conferma dal sistema.' }
        ],
        domandeFrequenti: [
            { domanda: 'Ci sono costi?', risposta: 'No, è gratuito.' }
        ],
        contattiSupporto: [
            { nome: 'Aiuto Bonus Digitale', telefono: '800-321-987', link: 'https://www.italia.it/bonusdigitale' }
        ]
    },
    {
        id: 'fse-guide',
        titolo: 'Come accedere al Fascicolo Sanitario Elettronico – guida super facile',
        difficolta: 1,
        tempoStimato: 10,
        prerequisiti: ['SPID livello 2', 'Computer o smartphone', 'Internet'],
        passi: [
            { ordine: 1, titolo: 'Apri il sito del FSE', descrizione: 'Vai su www.fascicolosanitario.gov.it e clicca "Accedi".', verifica: 'Sei sulla pagina di login.' },
            { ordine: 2, titolo: 'Login con SPID', descrizione: 'Inserisci username e password del tuo SPID.', verifica: 'Accedi alla tua area FSE.' },
            { ordine: 3, titolo: 'Controlla i tuoi documenti', descrizione: 'Clicca su "Referti" o "Vaccini" per vedere i tuoi dati sanitari.', verifica: 'Riesci a vedere i tuoi documenti.' }
        ],
        domandeFrequenti: [
            { domanda: 'Serve SPID?', risposta: 'Sì, senza SPID non puoi entrare.' }
        ],
        contattiSupporto: [
            { nome: 'Assistenza FSE', telefono: '800-987-654', link: 'https://www.fascicolosanitario.gov.it/contatti' }
        ]
    }
];

// Funzioni simulate
export async function fetchGuides(): Promise<Guide[]> {
    await new Promise(r => setTimeout(r, 250));
    return mockGuides;
}

export async function fetchGuideById(id: string): Promise<Guide | null> {
    const list = await fetchGuides();
    return list.find(g => g.id === id) ?? null;
}
