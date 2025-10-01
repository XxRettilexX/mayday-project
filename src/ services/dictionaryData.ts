import { type Term } from "../types/dictionary"

// Dati mock per il dizionario
const mockTerms: Term[] = [
    // === SICUREZZA ONLINE ===
    {
        id: "1",
        term: "Scam",
        definition: "Truffa online, tentativo di frode attraverso internet",
        example: "Quella email che promette un premio in cambio di denaro è uno scam",
        category: "Sicurezza"
    },
    {
        id: "2",
        term: "Phishing",
        definition: "Tentativo di rubare informazioni personali fingendosi un'entità affidabile come una banca o un servizio pubblico",
        example: "Hanno fatto phishing dei miei dati bancari con una finta email della mia banca",
        category: "Sicurezza"
    },
    {
        id: "3",
        term: "Password",
        definition: "Parola d'accesso segreta per proteggere i tuoi account online",
        example: "Devi creare una password forte con lettere, numeri e simboli per proteggere la tua email",
        category: "Sicurezza"
    },
    {
        id: "4",
        term: "Antivirus",
        definition: "Programma che protegge il computer da virus e software dannosi",
        example: "Ho installato un antivirus per proteggere il mio computer dalle minacce online",
        category: "Sicurezza"
    },
    {
        id: "5",
        term: "Firewall",
        definition: "Sistema di sicurezza che blocca accessi non autorizzati al tuo computer",
        example: "Il firewall ha bloccato un tentativo di accesso sospetto al mio computer",
        category: "Sicurezza"
    },
    {
        id: "6",
        term: "Malware",
        definition: "Software dannoso che può danneggiare il computer o rubare informazioni",
        example: "Non scaricare allegati da email sconosciute, potrebbero contenere malware",
        category: "Sicurezza"
    },
    {
        id: "7",
        term: "VPN",
        definition: "Rete privata virtuale che protegge la tua connessione internet",
        example: "Uso una VPN quando mi connetto a reti Wi-Fi pubbliche per maggiore sicurezza",
        category: "Sicurezza"
    },
    {
        id: "8",
        term: "Autenticazione a due fattori",
        definition: "Sicurezza aggiuntiva che richiede due modi diversi per accedere",
        example: "Con l'autenticazione a due fattori, oltre alla password ricevo un codice sul telefono",
        category: "Sicurezza"
    },

    // === SERVIZI DIGITALI ===
    {
        id: "9",
        term: "SPID",
        definition: "Sistema Pubblico di Identità Digitale - la tua identità per accedere a tutti i servizi pubblici online",
        example: "Per accedere al sito dell'INPS o prenotare una visita medica online devi avere SPID",
        category: "Servizi"
    },
    {
        id: "10",
        term: "PEC",
        definition: "Posta Elettronica Certificata - email che ha lo stesso valore legale di una raccomandata con ricevuta di ritorno",
        example: "Ho inviato il documento tramite PEC così ho la prova che è stato consegnato",
        category: "Servizi"
    },
    {
        id: "11",
        term: "CIE",
        definition: "Carta d'Identità Elettronica - la nuova carta d'identità che si può usare anche per accedere ai servizi online",
        example: "Con la CIE posso accedere ai servizi pubblici senza ricordare username e password",
        category: "Servizi"
    },
    {
        id: "12",
        term: "App IO",
        definition: "Applicazione ufficiale per ricevere messaggi dalla Pubblica Amministrazione",
        example: "Sull'App IO ricevo le comunicazioni dal Comune e dall'ASL direttamente sul telefono",
        category: "Servizi"
    },
    {
        id: "13",
        term: "Fascicolo Sanitario Elettronico",
        definition: "Il tuo raccoglitore digitale di referti medici, esami e ricette",
        example: "Posso vedere i risultati delle analisi sul Fascicolo Sanitario senza andare in ospedale",
        category: "Servizi"
    },
    {
        id: "14",
        term: "PagoPA",
        definition: "Sistema per pagare online i servizi della Pubblica Amministrazione",
        example: "Ho pagato la TARI tramite PagoPA con la carta di credito",
        category: "Servizi"
    },

    // === SOCIAL E COMUNICAZIONE ===
    {
        id: "15",
        term: "WhatsApp",
        definition: "Applicazione per mandare messaggi, fare chiamate e videochiamate gratis",
        example: "Uso WhatsApp per sentire i miei nipoti che vivono all'estero con le videochiamate",
        category: "Social"
    },
    {
        id: "16",
        term: "Facebook",
        definition: "Social network per restare in contatto con familiari e amici, condividere foto e notizie",
        example: "Su Facebook vedo le foto dei nipotini che pubblica mia figlia",
        category: "Social"
    },
    {
        id: "17",
        term: "Videochiamata",
        definition: "Chiamata dove puoi vedere la persona con cui parli attraverso la telecamera",
        example: "Faccio una videochiamata con i miei amici per vederci mentre chiacchieriamo",
        category: "Social"
    },
    {
        id: "18",
        term: "Messaggio vocale",
        definition: "Messaggio registrato con la voce invece che scritto con il testo",
        example: "Quando non ho voglia di scrivere, mando un messaggio vocale su WhatsApp",
        category: "Social"
    },
    {
        id: "19",
        term: "Gruppo",
        definition: "Spazio virtuale dove più persone possono scriversi e condividere contenuti",
        example: "Sono nel gruppo di famiglia su WhatsApp dove ci scriviamo tutti insieme",
        category: "Social"
    },
    {
        id: "20",
        term: "Storia (Story)",
        definition: "Foto o video che puoi condividere e che scompaiono dopo 24 ore",
        example: "Mia nipote ha messo una storia su Instagram con le foto della gita",
        category: "Social"
    },

    // === TECNOLOGIA BASE ===
    {
        id: "21",
        term: "Smartphone",
        definition: "Telefono intelligente che fa molte cose oltre alle chiamate: internet, foto, app",
        example: "Con lo smartphone posso fare foto, navigare su internet e usare WhatsApp",
        category: "Tecnologia"
    },
    {
        id: "22",
        term: "Tablet",
        definition: "Computer piatto e portatile con schermo touch, più grande di un telefono",
        example: "Uso il tablet per leggere il giornale online e vedere i video perché ha lo schermo grande",
        category: "Tecnologia"
    },
    {
        id: "23",
        term: "Wi-Fi",
        definition: "Connessione internet senza fili che permette di collegare dispositivi a internet",
        example: "A casa ho il Wi-Fi così posso usare internet sul telefono senza consumare i giga",
        category: "Tecnologia"
    },
    {
        id: "24",
        term: "Browser",
        definition: "Programma per navigare su internet (come Chrome, Safari, Firefox)",
        example: "Apro il browser Chrome per cercare informazioni su Google",
        category: "Tecnologia"
    },
    {
        id: "25",
        term: "App",
        definition: "Programma per smartphone o tablet che serve per fare cose specifiche",
        example: "Ho scaricato l'app della mia banca per controllare il conto dal telefono",
        category: "Tecnologia"
    },
    {
        id: "26",
        term: "Cloud",
        definition: "Spazio di archiviazione su internet dove puoi salvare foto e documenti",
        example: "Salvo le foto nel cloud così non occupo spazio sul telefono e le ho sempre disponibili",
        category: "Tecnologia"
    },
    {
        id: "27",
        term: "Touchscreen",
        definition: "Schermo che si usa toccandolo con le dita invece che con mouse e tastiera",
        example: "Sul touchscreen del mio tablet sfoglio le foto toccando lo schermo",
        category: "Tecnologia"
    },
    {
        id: "28",
        term: "Bluetooth",
        definition: "Tecnologia per collegare dispositivi senza fili a breve distanza",
        example: "Collego le cuffie al telefono via Bluetooth per ascoltare la musica senza fili",
        category: "Tecnologia"
    },

    // === INTERNET E NAVIGAZIONE ===
    {
        id: "29",
        term: "Sito web",
        definition: "Insieme di pagine collegate tra loro su internet",
        example: "Il sito web del Comune mi permette di prenotare appuntamenti online",
        category: "Internet"
    },
    {
        id: "30",
        term: "Link",
        definition: "Collegamento cliccabile che porta a un'altra pagina o sito",
        example: "Ho cliccato sul link nell'email ed è apparso il sito della banca",
        category: "Internet"
    },
    {
        id: "31",
        term: "Download",
        definition: "Scaricare un file da internet sul proprio dispositivo",
        example: "Ho fatto il download della ricetta medica dal sito dell'ASL",
        category: "Internet"
    },
    {
        id: "32",
        term: "Upload",
        definition: "Caricare un file dal proprio dispositivo su internet",
        example: "Devo fare l'upload del documento per inviare la domanda online",
        category: "Internet"
    },
    {
        id: "33",
        term: "Cookie",
        definition: "Piccoli file che i siti web salvano sul tuo computer per ricordare le tue preferenze",
        example: "Il sito mi ha chiesto di accettare i cookie per ricordare la mia lingua",
        category: "Internet"
    },
    {
        id: "34",
        term: "Password manager",
        definition: "Programma che ricorda e gestisce tutte le tue password in modo sicuro",
        example: "Uso un password manager così devo ricordare solo una password principale",
        category: "Internet"
    },

    // === E-COMMERCE E PAGAMENTI ===
    {
        id: "35",
        term: "Amazon",
        definition: "Sito per comprare online praticamente qualsiasi cosa",
        example: "Su Amazon ho comprato il libro che non trovavo in libreria",
        category: "Commercio"
    },
    {
        id: "36",
        term: "e-commerce",
        definition: "Acquisti e vendite effettuati su internet",
        example: "Faccio spesso acquisti di e-commerce perché è comodo e veloce",
        category: "Commercio"
    },
    {
        id: "37",
        term: "PayPal",
        definition: "Sistema per pagare online in modo sicuro senza condividere i dati della carta",
        example: "Uso PayPal per pagare gli acquisti online perché è più sicuro",
        category: "Commercio"
    },
    {
        id: "38",
        term: "Carta di credito",
        definition: "Carta per pagare che addebita l'importo successivamente",
        example: "Uso la carta di credito per gli acquisti online e le spese importanti",
        category: "Commercio"
    },
    {
        id: "39",
        term: "Carta di debito",
        definition: "Carta per pagare che addebita subito l'importo dal conto corrente",
        example: "Per la spesa quotidiana uso la carta di debito collegata al mio conto",
        category: "Commercio"
    },
    {
        id: "40",
        term: "Bonifico online",
        definition: "Trasferimento di denaro da un conto a un altro tramite internet banking",
        example: "Ho fatto un bonifico online per pagare l'affitto direttamente dal sito della banca",
        category: "Commercio"
    },

    // === COMUNICAZIONE DIGITALE ===
    {
        id: "41",
        term: "Email",
        definition: "Posta elettronica - messaggi scritti inviati tramite internet",
        example: "Mando una email al mio medico per chiedere un appuntamento",
        category: "Comunicazione"
    },
    {
        id: "42",
        term: "Inbox",
        definition: "Casella di posta in arrivo dove ricevi le email",
        example: "Controllo l'inbox della mia email ogni mattina per vedere i nuovi messaggi",
        category: "Comunicazione"
    },
    {
        id: "43",
        term: "Spam",
        definition: "Email indesiderate, spesso pubblicitarie o di truffa",
        example: "La email che promette milioni di euro è finita automaticamente nello spam",
        category: "Comunicazione"
    },
    {
        id: "44",
        term: "Allegato",
        definition: "File che viene inviato insieme a un'email",
        example: "Nell'email ho messo in allegato il documento da firmare",
        category: "Comunicazione"
    },
    {
        id: "45",
        term: "Newsletter",
        definition: "Email informative periodiche a cui ci si può iscrivere volontariamente",
        example: "Mi sono iscritto alla newsletter del mio negozio preferito per ricevere le offerte",
        category: "Comunicazione"
    },

    // === INTRATTENIMENTO DIGITALE ===
    {
        id: "46",
        term: "Netflix",
        definition: "Servizio per guardare film e serie TV in streaming su internet",
        example: "La sera guardo un film su Netflix con mio marito",
        category: "Intrattenimento"
    },
    {
        id: "47",
        term: "Streaming",
        definition: "Guardare video o ascoltare musica in diretta su internet senza scaricare",
        example: "Ascolto la radio in streaming mentre faccio le faccende di casa",
        category: "Intrattenimento"
    },
    {
        id: "48",
        term: "Podcast",
        definition: "Programmi audio che puoi ascoltare quando vuoi, come una radio on demand",
        example: "Durante le passeggiate ascolto podcast di storia e attualità",
        category: "Intrattenimento"
    },
    {
        id: "49",
        term: "E-book",
        definition: "Libro in formato digitale che si legge su dispositivi elettronici",
        example: "Leggo e-book sul tablet perché posso ingrandire i caratteri",
        category: "Intrattenimento"
    },
    {
        id: "50",
        term: "Audiolibro",
        definition: "Libro letto da una voce che puoi ascoltare invece che leggere",
        example: "Quando ho problemi alla vista, ascolto audiolibri invece di leggere",
        category: "Intrattenimento"
    },

    // === SALUTE E BENESSERE DIGITALE ===
    {
        id: "51",
        term: "Telemedicina",
        definition: "Visite mediche a distanza tramite videochiamata",
        example: "Ho fatto una visita di telemedicina con il mio medico senza uscire di casa",
        category: "Salute"
    },
    {
        id: "52",
        term: "App salute",
        definition: "Applicazioni per monitorare la salute, come pressione, passi, sonno",
        example: "Uso l'app salute sul telefono per contare quanti passi faccio al giorno",
        category: "Salute"
    },
    {
        id: "53",
        term: "Fascicolo sanitario",
        definition: "Il tuo raccoglitore digitale di referti medici e informazioni sanitarie",
        example: "Nel mio fascicolo sanitario trovo tutti i referti degli esami fatti",
        category: "Salute"
    },
    {
        id: "54",
        term: "Prenotazione online",
        definition: "Prenotare visite ed esami tramite internet senza telefonare",
        example: "Ho prenotato la visita specialistica online dal sito dell'ospedale",
        category: "Salute"
    },

    // === MOBILITÀ E TRASPORTI ===
    {
        id: "55",
        term: "App taxi",
        definition: "Applicazione per chiamare un taxi direttamente dal telefono",
        example: "Con l'app taxi posso vedere dove è l'auto e quanto tempo ci mette ad arrivare",
        category: "Mobilità"
    },
    {
        id: "56",
        term: "Biglietto digitale",
        definition: "Biglietto per treno, aereo o eventi che si mostra sul telefono",
        example: "Il biglietto del treno lo ho sul telefono, non devo stamparlo",
        category: "Mobilità"
    },
    {
        id: "57",
        term: "Maps",
        definition: "Applicazione per trovare strade, indicazioni e luoghi",
        example: "Uso Google Maps per trovare la strada quando vado in posti nuovi",
        category: "Mobilità"
    },
    {
        id: "58",
        term: "NFC",
        definition: "Tecnologia per pagare o accedere a servizi avvicinando il telefono",
        example: "Pago il biglietto dell'autobus avvicinando il telefono al lettore NFC",
        category: "Mobilità"
    },

    // === CASA INTELLIGENTE ===
    {
        id: "59",
        term: "Smart home",
        definition: "Casa con dispositivi connessi a internet che si possono controllare da remoto",
        example: "Nella mia smart home accendo il riscaldamento dal telefono prima di tornare a casa",
        category: "Tecnologia"
    },
    {
        id: "60",
        term: "Assistente vocale",
        definition: "Programma che risponde alla voce e esegue comandi (come Alexa o Google Assistant)",
        example: "Chiedo all'assistente vocale di mettere la sveglia o di raccontare le notizie",
        category: "Tecnologia"
    },

    // === LAVORO E FORMAZIONE ===
    {
        id: "61",
        term: "Smart working",
        definition: "Lavorare da casa invece che in ufficio, usando internet",
        example: "Mio figlio fa smart working tre giorni alla settimana da casa",
        category: "Lavoro"
    },
    {
        id: "62",
        term: "Video conferenza",
        definition: "Riunione online dove i partecipanti si vedono e sentono tramite video",
        example: "Faccio video conferenze con i colleghi usando Zoom o Microsoft Teams",
        category: "Lavoro"
    },
    {
        id: "63",
        term: "Corso online",
        definition: "Lezioni e formazione che si seguono su internet invece che in aula",
        example: "Sto seguendo un corso online per imparare a usare meglio il computer",
        category: "Formazione"
    },
    {
        id: "64",
        term: "Webinar",
        definition: "Seminario o lezione trasmessa in diretta su internet",
        example: "Ho partecipato a un webinar sulla sicurezza online organizzato dalla Polizia Postale",
        category: "Formazione"
    },

    // === TERMINI TECNICI SEMPLIFICATI ===
    {
        id: "65",
        term: "Software",
        definition: "Programmi e applicazioni che fanno funzionare il computer o il telefono",
        example: "Il software di videoscrittura mi permette di scrivere lettere al computer",
        category: "Tecnologia"
    },
    {
        id: "66",
        term: "Hardware",
        definition: "Parti fisiche del computer: schermo, tastiera, mouse, stampante",
        example: "L'hardware del mio computer è vecchio, forse devo cambiarlo",
        category: "Tecnologia"
    },
    {
        id: "67",
        term: "Update",
        definition: "Aggiornamento di un programma per correggere problemi o aggiungere funzioni",
        example: "Devo fare l'update del telefono per avere le nuove funzioni di sicurezza",
        category: "Tecnologia"
    },
    {
        id: "68",
        term: "Backup",
        definition: "Copia di sicurezza di foto, documenti e dati importanti",
        example: "Faccio sempre il backup delle foto così non le perdo se si rompe il telefono",
        category: "Tecnologia"
    },
    {
        id: "69",
        term: "Account",
        definition: "Il tuo profilo personale su un sito o servizio online",
        example: "Ho creato un account su Facebook per connettermi con amici e parenti",
        category: "Tecnologia"
    },
    {
        id: "70",
        term: "Profilo",
        definition: "Pagina personale su un social network con le tue informazioni e foto",
        example: "Nel mio profilo Facebook ho messo una foto recente e i miei interessi",
        category: "Social"
    }
];

export const getTerms = async (): Promise<Term[]> => {
    // Simula una chiamata API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockTerms)
        }, 500)
    })
}

export const searchTerms = (terms: Term[], query: string): Term[] => {
    if (!query) return terms
    const lowerQuery = query.toLowerCase()
    return terms.filter(term =>
        term.term.toLowerCase().includes(lowerQuery) ||
        term.definition.toLowerCase().includes(lowerQuery)
    )
}