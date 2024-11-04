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

/*
JSnack 6
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente
*/

const N = parseInt(prompt('Inserisci un numero:'));

if (isNaN(N)) {
    for (let i = 1; i <= N; i++) {
        const cubo = i ** 3;
        console.log('Il cubo di ', N, 'è ', cubo);
    }
} else {
    console.log("Il valore inserito non è valido. Inserisci un numero!");
}



/*
JSnack 7
Stampa le potenze di 2 fino a 1000
*/

let potenza = 1;
console.log('Le potenze di 2 fino a 1000 sono: ');

while (potenza <= 1000) {
    console.log(potenza);
    // calcolo la potenza
    potenza *= 2;
}

/*
JSnack 9
Calcola la somma e la media dei primi 10 numeri
*/

let somma = 0;
const numeroMax = 10;

// sommo i primi 10 numeri
for (let i = 1; i <= numeroMax; i++) {
    somma += i;
}
console.log('La somma dei primi 10 numeri è ', somma);

// calcolo la media
const media = somma / numeroMax;
console.log('La media dei primi 10 numeri è di: ', media);