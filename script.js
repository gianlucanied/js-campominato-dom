/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Creiamo una const per il button start
const startButton = document.querySelector (".button-start");

// Creiamo una const per il main
const main = document.querySelector ("main");

// Creiamo una funzione per far mostrare il container alla premuta del button start
function showContainer() {

    // Creiamo il div
    const container = document.createElement("div");

    // Aggiungiamo la classe container
    container.classList.add ("container");

    // Usiamo l'append per collegare il main al container
    main.append (container);

    // Creiamo un ciclo for 
    for (let i=1; i<=100; i++) {

        // Creiamo il div
        const square = document.createElement("div");

        // Aggiungiamo la classe square
        square.classList.add ("square");

        // Usiamo l'append per collegare il container a tutti gli square
        square.append(i);
        container.append (square);

        // Creiamo il click
        square.addEventListener("click",() => {

            // Stampiamo il numero cliccato in console
            console.log("Ho selezionato lo square numero ",i);

            // Aggiungiamo la classe clicked quando cliccati
            square.classList.add ("clicked");
}
)
    }

    // Disabilitiamo il tasto start dopo che questo è stato premuto una volta
    startButton.disabled = true;
}


startButton.addEventListener("click", showContainer);