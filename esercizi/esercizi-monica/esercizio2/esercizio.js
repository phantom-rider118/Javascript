//Esercizio 2
//Dato il seguente array di parole, trasforma tutte le parole in maiuscolo e poi conta quante lettere ci sono in totale.
const parole = ["ciao", "albero", "parco", "mese", "divertimento"];

const paroleMaiuscolo = parole.map((parola) => parola.toUpperCase())
let sommaLettere = 0
paroleMaiuscolo.forEach((lettere) => {
    sommaLettere += lettere.length
})
console.log(sommaLettere)