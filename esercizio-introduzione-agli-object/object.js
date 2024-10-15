// Crea un oggetto di nome car, che abbia al suo interno due proprietà: name, color.
// const car = {
//     name: "panda",
//     color: "black", 
// }

//Stampa il valore delle due proprietà di questo oggetto

// console.log(car.name);
// console.log(car.color);


//Partendo dall'oggetto creato nell'esercizio precedente, scrivi un ciclo for in dove stampiamo le chiavi dell'oggetto car

const car = {
    name: "panda",
    color: "black", 
}

for(let chiave in car){
    console.log(`${chiave}: ${car[chiave]}`)
}