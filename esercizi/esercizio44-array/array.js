// Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Stampare in console il primo valore
// Stampare la lunghezza dell'array
// Stampare in consolle l'ultimo valore
// Spiegare il risultato se proviamo a stampare l'elemento dell'array con indice venti

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Stampare il primo valore
console.log(numbers[0])

//Stampare la lunghezza dell'array
console.log(numbers.length)

//stampare l'ultimo valore
console.log(numbers[numbers.length -1])

//Se proviamo a stampare l'elemento con indice 20, questo stampera undefined, perchè stiamo provando ad accedere ad un elemento che non si trova all'interno dell'array
console.log(numbers[20])