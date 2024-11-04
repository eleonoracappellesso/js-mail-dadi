"use strict";
console.clear();

/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

const emails = [
    "mail1@esempio.com",
    "mail2@esempio.com",
    "mail3@esempio.com",
    "mail4@esempio.com"
];
const emailUtente = prompt("Inserisci qui la tua email:");
console.log(emailUtente);

// verifico se la mail è presente nell'array
if (emails.includes(emailUtente)) {
    console.log("Accesso consentito!");
} else {
    console.log("Accesso negato! Riprova con una mail differente.");
}

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// inserisco una funzione per generare casualmenre un numero da 1 a 6
function numeroCasuale () {
    return Math.floor(Math.random() * 6) + 1;
}

const numeroGiocatore = numeroCasuale();
console.log(numeroGiocatore);

const numeroComputer = numeroCasuale();
console.log(numeroComputer);



