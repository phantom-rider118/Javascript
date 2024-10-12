//Scrivi una funzione chiamata sum che prenda due numeri come parametri e restituisca la loro somma.

function sum(a,b){
    let somma = a + b;
    return somma;
}
console.log (sum(3,5))

// somma con variabili a parte
let x = 4
let y = 10

console.log(sum(x,y))

//con if else

x = 2 //Definisci la variabile x;
y = 10 //Definisci la variabile y;

function somma(){
    let sum; //Dichiarazione variabile sum;
    if(x > 0 && y < 10){
        sum = x + y; //calcola la somma se la condizione é vera
        return sum; //restituendo il risultato;
    }else{
        return "Non si può eseguire la somma"; //altrimenti restituisce la stringa;
    }
}
console.log(somma());

// Somma con ciclo FOR
let numero = 10;
let addendo = 0;
function sommaFor(){
    for(i = 0; i <= numero; i++){
        console.log(i);
        addendo += i
    }  
    return addendo
}
console.log(sommaFor())


function sommaNumeriRandom(){
    let primoNumero = Math.floor(Math.random()*10) +1
    console.log("primoNumero: " + primoNumero)
    let secondoNumero = Math.floor(Math.random()*10) +1
    console.log("secondoNumero: " + secondoNumero)
    let somma1 = primoNumero + secondoNumero
    return "Somma: " + somma1
}
console.log(sommaNumeriRandom())