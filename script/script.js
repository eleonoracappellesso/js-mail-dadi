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


if (emails.includes(emailUtente)) {
    console.log("Accesso consentito!");
} else {
    console.log("Accesso negato! Riprova con una mail differente.");
}
