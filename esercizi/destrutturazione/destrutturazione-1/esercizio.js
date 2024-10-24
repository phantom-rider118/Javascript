// Dato un oggetto person con le proprietà nome ed età, utilizza la destrutturazione dell'oggetto per creare variabili nome ed età che contengono i valori dell'oggetto.

const person = { name: "Alice", age: 30 };
const { name, age } = person;

console.log(age);
console.log(name);
