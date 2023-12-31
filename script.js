/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Creiamo una variabile che tiene conto del punteggio
let userPunteggio = 0;

// Creiamo un Array vuoto di bombe
const positionBomb = [];

// Genero numeri random
while (positionBomb.length < 16) {

    //Inserisco solo se il numero non è già presente nell'array
    let numeroCasuale = genRandomNumMinMax(1, 100);

    if (positionBomb.includes(numeroCasuale) === false) {
      positionBomb.push(numeroCasuale);
    }
  }
  
console.log("Numeri random " + positionBomb);

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

        // Creiamo un div per il punteggio in tempo reale
        const punteggio = document.createElement("div");

        // Scriviamo il punteggio
        punteggio.innerHTML = "Il tuo punteggio è: " + userPunteggio;
    
        // Usiamo l'append per collegare il punteggio al container
        main.append (punteggio);


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

            // Aggiungiamo la classe se si clicca sulla bomba
            if (positionBomb.includes(i) === true) {

                // Stampiamo 'Esplodi' se si preme su una bomba
                console.log("Esplodi")

                // Aggiungiamo la classe bomb a square
                square.classList.add ("bomb");

                // alert per la fine della partita
                alert("Partita terminata, hai calpestato una bomba! Il tuo punteggio è: " +userPunteggio);

                // Rimuoviamo il container in caso si perda
                container.remove();

                // Rimuoviamo il punteggio in caso si perda
                punteggio.remove();

                // Azzeriamo il punteggio
                userPunteggio = 0;

                // Riattiviamo il tasto start
                startButton.disabled = false;

            } else {
                console.log("No, sei salvo");

                // Aggiungiamo la classe clicked quando cliccati
                square.classList.add ("clicked");

                // Aggiungiamo 1 al punteggio
                userPunteggio++;
                console.log(userPunteggio);
                punteggio.innerHTML = "Il tuo punteggio è: " + userPunteggio;
            }

            // Stampo l'Array delle bombe al click
            console.log("Bombe: ", positionBomb);
}
)
    }

    // Disabilitiamo il tasto start dopo che questo è stato premuto una volta
    startButton.disabled = true;
}


startButton.addEventListener("click", showContainer);


/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */


// Creiamo una funzione che ci generi 16 numeri casuali 
function genRandomNumMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

