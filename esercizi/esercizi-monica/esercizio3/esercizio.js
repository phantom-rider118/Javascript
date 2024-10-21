//Esercizio 3
// Dato il seguente array di numeri che contiente sia valori positivi che negativi, filtra i numeri positivi e calcola la loro media.
const numeriMix = [-5, 10, 15, -20, 25, 30];

const numeriPari = numeriMix.filter((num) => num % 2 === 0)
let somma = 0
numeriPari.forEach((numeri) => {
    somma += numeri
})
console.log(somma)