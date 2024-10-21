//Esercizio 1
//Dato il seguente array di numeri, filtra i numeri pari e calcola la loro somma.
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filtrare i numeri pari
const numeriPari = numeri.filter((num) => num % 2 === 0)
console.log(numeriPari)

//calcolare la somma 
let somma = 0
numeriPari.forEach((num) => {
    somma += num
})

console.log(somma)