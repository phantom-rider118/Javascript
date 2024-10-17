//Esercizio 1: Creare una classe Automobile con le seduenti proprità:
// marca: Stringa che rappresenta la marca dell'automobile.
// modello: Stringa che rappresenta il modello dell'automobile.
// anno: Numero intero che rappresenta l'anno di produzione.
// kmPercorsi: Numero che rappresenta i chilometri percorsi (inizializzato a 0).
// Aggiungi un metodo accelera() che incrementa il valore di kmPercorsi di una quantità randomica tra 10 e 50 km.
// Aggiungi un metodo frena() che decrementa il valore di kmPercorsi di una quantità randomica tra 1 e 10 km, assicurandoti che kmPercorsi non diventi negativo.

class Automobile {
    constructor(marca, modello, anno, kmPercorsi) {
        this.marca = marca,
        this.modello = modello,
        this.anno = anno,
        this.kmPercorsi = kmPercorsi
    };
    accelera() {
        this.kmPercorsi += Math.floor(Math.random()*41)+ 10;
        //Math.floor(Math.random()*(max - min + 1)) + min;
        return this.kmPercorsi
    }
    frena(){
        this.kmPercorsi -= Math.floor(Math.random()*10) + 1
        if (this.kmPercorsi < 0) {
            this.kmPercorsi = 0
        }
        return this.kmPercorsi 
    }
}

const panda = new Automobile("Fiat", "Panda","2000", 0);
const toyota = new Automobile("Toyota", "Corolla","2023",0)


console.log(`${panda.marca} ${panda.modello} ha percorso ${panda.accelera()}km, dopo una frenata ne ha percorsi ${panda.frena()}km`);

console.log(`${toyota.marca} ${toyota.modello} ha percorso ${toyota.accelera()}km, dopo una frenata ne ha percorsi ${toyota.frena()}km`);
