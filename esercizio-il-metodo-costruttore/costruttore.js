//Scrivere una funzione di nome Smartphone che prende come parametro i seguenti elementi: brand, name, price.
//Questa funzione, ogni volta che viene chiamata con nuovo, deve restituire un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo.

//Metodo Vecchio
function Smartphone(a, b, c) {
  this.brand = a;
  this.name = b;
  this.price = c;
}
const samsungS23 = new Smartphone("Samsung", "Galaxy S23", "800");
const iphone14 = new Smartphone("Apple", "Iphone14", "900");

console.log(samsungS23);
console.log(iphone14);

//Metodo nuovo
class smartphone {
  constructor(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
  }
}

const smartphone1 = new smartphone("Samsung", "GalaxyS23", "800");
const smartphone2 = new smartphone("Apple", "Iphone14", "900");

console.log(smartphone1);
console.log(smartphone2);
