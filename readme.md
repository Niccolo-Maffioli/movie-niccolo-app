# Progetto Modulo FrontEnd 1

## Autore: Niccolò Maffioli  
**Collaboratori:** Nessuno  
**Data ultimo aggiornamento:** 27/04/2025  

### Descrizione:
Questo progetto è una simulazione di **Netflix**, che utilizza dinamicamente le API di **The Movie Database (TMDB)** per caricare contenuti film e serie TV.

### Funzionalità:
- **Home Page:** Visualizzazione di una lista di film e serie TV popolari.
- **Pagine Film/Serie TV:** Pagine separate per i film e le serie TV.
- **Dettagli Film/Serie TV:** Visualizzazione dei dettagli (come titolo, immagine e descrizione) al passaggio del mouse su ogni scheda.
- **Ricerca:** Ricerca di film e serie TV tramite l'API TMDB.

### Tecnologie:
- **Frontend:** HTML, CSS, TypeScript (JavaScript).
- **API Esterne:** TMDB (The Movie Database).
- **Altri strumenti:** ChatGPT per il supporto nello sviluppo.

### Processo/Considerazioni:
1. **Fase iniziale:** Ho creato una pagina HTML statica che rispecchiasse l'aspetto di Netflix, cercando di ricreare un design simile anche nel layout e nel comportamento.
   
2. **Integrazione con TMDB:** Inizialmente, ho utilizzato JavaScript per connettermi all'API di TMDB, rendendo dinamico il sito senza caricare troppe immagini statiche in locale. Le immagini venivano caricate dinamicamente tramite le API e visualizzate direttamente nelle card.

3. **Gestione della pagina singola:** Durante la fase di sviluppo, ho esplorato l'idea di usare una singola pagina (`index.html`) con l'uso di classi CSS per nascondere o mostrare le sezioni. Tuttavia, ho constatato che questo approccio risultava troppo dispendioso in termini di performance. Ho quindi deciso di utilizzare più pagine HTML, popolate dinamicamente con il contenuto tramite JavaScript.

4. **Passaggio a TypeScript:** Dopo aver completato la parte statica e dinamica del sito, ho deciso di convertire il progetto in TypeScript per sfruttare i vantaggi di un linguaggio tipizzato. Ho riorganizzato il codice spostando i file nella cartella `src` e utilizzando il comando di compilazione per ottenere i file JavaScript nella cartella `dist`.

### Difficoltà incontrate:
- **Gestione di fetch, try-catch, e API:** Ho avuto difficoltà nell'implementazione di alcune funzionalità, specialmente nell'uso di `fetch`, `try-catch`, e nella gestione delle risposte asincrone. Questo è stato uno degli aspetti che ho dovuto comprendere meglio durante lo sviluppo.
  
- **Gestione dinamica della pagina singola:** La logica di nascondere e mostrare contenuti in base alla navigazione è stata un po' complessa da implementare. Alla fine, la soluzione migliore è stata passare a una gestione basata su più pagine HTML.

### Punti di miglioramento:
- **Slider:** Lo slider che mostra i film funziona in base alla larghezza della pagina, ma questo approccio potrebbe essere limitante, specialmente su dispositivi con risoluzioni diverse. Un miglioramento potrebbe essere l'uso di un sistema di gestione dello slider più dinamico e responsivo.
  
- **Responsive Design:** Il sito non è completamente responsive. Una delle principali aree da migliorare riguarda l'adattamento del layout a dispositivi mobili o schermi di diverse dimensioni. L'implementazione di media queries sarebbe utile per migliorare l'esperienza utente su dispositivi più piccoli.