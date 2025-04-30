# Progetto Modulo FrontEnd 1

## Autore: Niccolò Maffioli  
**Collaboratori:** Nessuno  
**Data ultimo aggiornamento:** 30/04/2025  

### Descrizione:
Questo progetto è una simulazione di **Netflix**, che utilizza dinamicamente le API di **The Movie Database (TMDB)** per caricare contenuti di film e serie TV.

### Funzionalità:
- **Home Page:** Visualizzazione di una lista di film e serie TV popolari.
- **Pagine Film/Serie TV:** Pagine separate per film e serie TV.
- **Dettagli Film/Serie TV:** Visualizzazione dei dettagli (titolo, immagine, descrizione) al passaggio del mouse su ogni card e al click per una pagina dedicata.
- **Ricerca:** Funzionalità di ricerca tramite l'API TMDB.

### Tecnologie:
- **Frontend:** HTML, CSS, TypeScript (compilato in JavaScript).
- **API Esterne:** TMDB (The Movie Database).
- **Strumenti di supporto:** ChatGPT.

### Struttura del progetto:
- `/src`: contiene i file TypeScript (`.ts`)
- `/dist`: contiene i file JavaScript compilati (`.js`)
- `/css`: contiene i file di stile CSS
- `/img`: immagini e risorse statiche
- File HTML principali nella root (`index.html`, `film.html`, `serie.html`, ecc.)

### Processo di sviluppo:

1. **Design iniziale:** Realizzazione di una pagina HTML statica ispirata a Netflix, con layout e stili simili.
2. **Integrazione API TMDB:** Utilizzo di `fetch` per caricare dinamicamente contenuti da TMDB, evitando immagini statiche locali.
3. **Gestione multi-pagina:** Dopo una prima fase in cui si è tentato un approccio a singola pagina (`SPA`), si è optato per una struttura multi-pagina più semplice e performante.
4. **Passaggio a TypeScript:** Il progetto è stato poi convertito in TypeScript, con compilazione dei file nella cartella `dist`.
5. **Deploy su Vercel:** Alla fine, il progetto è stato pubblicato manualmente su **Vercel**, senza utilizzare strumenti come Vite per evitare configurazioni complesse non necessarie in questo caso.

### Considerazioni su Vite:
Durante il progetto è stato inizialmente provato Vite per migliorare il processo di sviluppo. Tuttavia, a causa di problemi nella configurazione (routing, path relativi, gestione degli asset), si è deciso di non utilizzarlo.

Ritengo che strumenti come Vite, TypeScript e molte altre dipendenze siano molto utili se integrati fin dall'inizio del progetto. Nel mio caso, l'introduzione di Vite e TypeScript è avvenuta in una fase già più che avanzata dello sviluppo. Tuttavia, questo approccio ha inevitabilmente reso il mio lavoro più complesso, soprattutto in termini di configurazione, gestione dei path e deploy. Per questo motivo, dopo aver tentato di adattare il progetto, ho preferito tornare a una struttura più semplice e gestibile manualmente eliminando vite, in futuro proverò a reintegrarlo.

### Difficoltà incontrate:
- **Gestione di fetch e asincronia:** Inizialmente complicata, poi migliorata col tempo grazie a `try/catch` e `async/await`.
- **Navigazione dinamica:** La SPA gestita con classi CSS era poco scalabile, sostituita da una gestione multi-pagina.
- **Git e branching:** Difficoltà iniziali nel mantenere un flusso ordinato con Git, a volte sviluppando sulla branch `main` invece che su feature branch dedicati.

### Punti di miglioramento:
- **Slider:** Attualmente basato sulla larghezza della finestra. Potrebbe essere migliorato per diventare più dinamico e responsivo.
- **Responsive Design:** Il sito non è completamente mobile-friendly. Implementare media queries sarebbe il passo successivo ideale.

### Deploy online:
👉 Il progetto è visibile su Vercel: [movie-niccolo-app](https://movie-niccolo-app-1yzy.vercel.app/)