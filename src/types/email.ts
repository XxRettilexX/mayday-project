export type Sicurezza = 'alta' | 'media' | 'bassa';

export interface EmailAnalysis {
    sicurezza: Sicurezza;
    fattoriRischio: string[];
    suggerimenti: string[];
    livelloPericolo: 1 | 2 | 3 | 4 | 5;
}

export interface RawEmailInput {
    mittente: string; // es. "nome <noreply@banca-imitazione.com>"
    testo: string;
    oggetto?: string;
}
