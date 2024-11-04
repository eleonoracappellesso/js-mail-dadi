"use strict";
console.clear();

/*
JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/

const numeriDispari = [];

for (let i = 0; i < 6; i++) {
    const numero = parseInt(prompt('Inserisci un numero:'));
    console.log(numero);
// determino quali numeri sono dispari
    if (numero % 2) {
        numeriDispari.push(numero);
    } 
}
console.log('Tra i numeri isneriti, i seguenti sono numeri dispari:', numeriDispari);

