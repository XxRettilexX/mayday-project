export interface Contatto {
    nome: string;
    telefono?: string;
    email?: string;
    link?: string;
}

export interface FAQ {
    domanda: string;
    risposta: string;
}

export interface GuideStep {
    ordine: number;
    titolo: string;
    descrizione: string;
    immagine?: string;
    avvertenze?: string;
    verifica: string;
}

export interface Guide {
    id: string;
    titolo: string;
    difficolta: 1 | 2 | 3;
    tempoStimato: number; // minuti stimati
    prerequisiti: string[];
    passi: GuideStep[];
    domandeFrequenti: FAQ[];
    contattiSupporto: Contatto[];
}
