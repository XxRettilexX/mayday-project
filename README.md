# 📘 Documentazione Ufficiale - MayDay Project

## 📄 Sommario
- Introduzione
- Finalità del Progetto
- Target di Riferimento
- Funzionalità Dettagliate
- Architettura Tecnica
- Struttura del Codice
- Roadmap e Sviluppi Futuri
- Metriche di Successo
- Contribuire al Progetto
- Supporto e Contatti

---

## 🌟 Introduzione
### Cosa è MayDay?
MayDay è un'applicazione web progressiva sviluppata specificamente per utenti anziani, con l'obiettivo di colmare il divario digitale attraverso un'interfaccia semplificata, accessibile e sicura.

### Mission
Fornire uno strumento digitale che funga da "ponte" tra gli utenti anziani e il mondo dei servizi online, riducendo la complessità e aumentando la sicurezza nelle operazioni quotidiane.

---

## 🎯 Finalità del Progetto
### Perché è nato MayDay?

| Problema Identificato | Soluzione MayDay |
|-----------------------|------------------|
| Digital Divide        | Interfaccia semplificata e guidata |
| Insicurezza online    | Strumenti di verifica e educazione |
| Linguaggio tecnico    | Dizionario con spiegazioni semplici |
| Procedure complesse   | Guide passo-passo illustrate |

### Obiettivi Specifici
- **Educazione Digitale**: Alfabetizzare gli utenti anziani al linguaggio e alle pratiche digitali
- **Prevenzione Truffe**: Ridurre il rischio di phishing e scam attraverso strumenti di verifica
- **Autonomia**: Rendere gli utenti indipendenti nell'uso dei servizi online
- **Accessibilità**: Garantire l'utilizzo a persone con diverse abilità visive e motorie

---

## 👥 Target di Riferimento
### Utenti Primari
- Anziani over 65 con limitata esperienza digitale
- Persone con disabilità visive o motorie lievi
- Utenti con scolarizzazione medio-bassa

### Caratteristiche del Target
| Bisogno | Soluzione MayDay |
|---------|------------------|
| Font piccoli illeggibili | Testo a dimensione aumentata (18px+) |
| Complessità delle interfacce | Design semplificato e gerarchico |
| Paura delle truffe online | Strumenti di verifica incorporati |
| Difficoltà con terminologia | Glossario integrato e contestuale |
| Procedure amministrative complesse | Guide sequenziali semplificate |

---

## 🛠 Funzionalità Dettagliate

### 1. 📚 Dizionario Digitale Interattivo
**Scopo**: Demistificare la terminologia tecnica attraverso spiegazioni semplici ed esempi pratici.

**Caratteristiche Tecniche**
- Ricerca in tempo reale con suggerimenti
- Categorizzazione intelligente (Sicurezza, Servizi, Social, etc.)
- Esempi contestualizzati per ogni termine
- Storia delle ricerche recenti
- Salvataggio preferiti per termini frequenti

**Termini Iniziali Inclusi**
- **Sicurezza**: Phishing, Scam, Malware, Antivirus
- **Servizi**: SPID, PEC, CIE, AppIO
- **Social**: Facebook, WhatsApp, Post, Condividere
- **Tecnici**: Browser, Password, Cloud, Download

---

### 2. 🔍 Controllore Email Intelligente

**Algoritmo di Analisi**
```typescript
interface EmailAnalysis {
  sicurezza: 'alta' | 'media' | 'bassa';
  fattoriRischio: string[];
  suggerimenti: string[];
  livelloPericolo: 1 | 2 | 3 | 4 | 5;
}
```

**Parametri Verificati**
- Dominio mittente (verifica autenticità)
- Presenza link sospetti (analisi URL)
- Linguaggio persuasivo (rilevamento tecniche psicologiche)
- Richiesta dati sensibili (pattern comuni scam)

**Output Utente**
- ✅ **SICURO**: Email affidabile, procedi con tranquillità
- ⚠️ **SOSPESO**: Attenzione, verifica prima di agire
- 🚫 **TRUFFA**: Non rispondere, elimina immediatamente

---

### 3. 📋 Assistente Pratiche Amministrative

**Guide Disponibili**
| Pratica | Difficoltà | Tempo Stimato |
|---------|------------|---------------|
| Attivazione SPID | Media | 15-20 minuti |
| Creazione PEC | Bassa | 10 minuti |
| Accesso INPS | Media | 15 minuti |
| Bonus Digitali | Alta | 25-30 minuti |

**Struttura delle Guide**
- Preparazione (cosa serve prima di iniziare)
- Procedura passo-passo (azioni sequenziali)
- Screenshot illustrativi (immagini esplicative)
- Risoluzione problemi (FAQ comuni)
- Contatti di supporto (assistenza ufficiale)

---

### 4. ♿ Sistema di Accessibilità Avanzato
**Implementazioni**
- Screen Reader Ready: Compatibilità totale con NVDA/JAWS
- Navigazione da tastiera: Tab index ottimizzato
- Contrasto AAA: Ratio 7:1 per ipovedenti
- Zoom sicuro: Layout non si rompe fino a 200%
- Riduzione movimento: Supporto `prefers-reduced-motion`

---

## 🏗 Architettura Tecnica

### Stack Tecnologico
```
Frontend: React 18 + TypeScript + Vite
Stile: CSS3 con Variabili Custom + Design System
Routing: React Router DOM 6
Build: Vite + TypeScript Compiler
Deploy: Netlify/Vercel ready
```

### Pattern Architetturali
**MVVM (Model-View-ViewModel)**
```typescript
// ESEMPIO: useDictionaryVm.ts
export function useDictionaryVm() {
  const [terms, setTerms] = useState<Term[]>([]);

  const filteredTerms = useMemo(() => filterTerms(terms, query), [terms, query]);

  const loadTerms = async () => { /* ... */ };

  return { terms: filteredTerms, loadTerms };
}
```

**Componenti**
- Presentazionali: Solo UI, nessuna logica (TermCard, EmailChecker)
- Container: Gestione stato e logica (Dictionary, EmailCheck pages)

### Principi di Design
- **Mobile First**
- **Progressive Enhancement**
- **Accessibility First**: WCAG 2.1 AA compliance
- **Performance First**: Ottimizzazione Core Web Vitals

---

## 📁 Struttura del Codice
```
src/
├── components/           # Componenti riutilizzabili
│   ├── ui/              # Componenti UI puri (Button, Card)
│   ├── layout/          # Componenti layout (Header, Footer)
│   └── features/        # Componenti specifici feature
├── pages/               # Pagine dell'applicazione
├── viewmodels/          # Logica di presentazione (MVVM)
├── services/            # Connettività API e dati
├── types/               # Definizioni TypeScript
├── hooks/               # Custom hooks riutilizzabili
└── utils/               # Funzioni helper e utilities
```

**Flusso Dati**
```
USER ACTION → VIEWMODEL → SERVICE → API → UPDATE STATE → RERENDER
```

**Gestione Stato**
- Stato Locale: `useState`
- Stato Globale: Context API
- Stato Server: React Query (futuro)

---

## 🔮 Roadmap e Sviluppi Futuri
- **Fase 1 (Completata)**
  - Setup progetto base React + TypeScript
  - Design system accessibile
  - Architettura MVVM
  - Dizionario base con 20+ termini

- **Fase 2 (In Sviluppo)**
  - Algoritmo controllo email
  - Guide pratiche amministrative complete
  - Sistema di preferiti utente
  - Localizzazione italiano/inglese

- **Fase 3 (Pianificata)**
  - App mobile (React Native)
  - Sistema di notifiche push
  - Integrazione con servizi istituzionali
  - Community features (forum assistenza)

---

## 📊 Metriche di Successo
- **Tempo di apprendimento**: < 5 minuti per feature base
- **Tasso di completamento**: > 85% per le guide
- **Accessibilità**: 100% WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals > 90/100

### Feedback Utenti
- Sistema di valutazione integrato
- Facilità d'uso (1-5 stelle)
- Chiarezza contenuti
- Suggerimenti miglioramento

---

## 🤝 Contribuire al Progetto
### Per Sviluppatori
- Fork del repository
- Branch feature (`feature/nome-feature`)
- Commit semantici (`feat:`, `fix:`, `docs:`)
- Testing accessibilità con axe-core
- Pull Request con descrizione dettagliata

### Per Designer
- Figma design system disponibile
- Component library coerente
- Template per nuove feature

---

## 📞 Supporto e Contatti
- **Team di Sviluppo**: dev-team@maydayproject.it
- **Supporto Utenti**: assistenza@maydayproject.it
- **Segnalazione Bug**: [GitHub Issues](https://github.com/mayday-project/issues)

---

<div align="center">
MayDay - Nessuno resti indietro nell'era digitale 🌟

Documentazione aggiornata al: 25/09/2025
</div>
