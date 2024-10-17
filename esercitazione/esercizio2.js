class Persona {
    constructor(nome,  cognome, eta, email) {
        this.nome = nome,
        this.cognome = cognome,
        this.eta = eta,
        this.email = email
    }
    saluta(){
        let saluto = "Hello, " + this.nome + " " + this.cognome;
        return saluto;
    }
}
class Studente extends Persona { //per ereditare la classe si utilizza extends prima si mette la nuova classe e poi dopo la classe dalla quale deve ereditare
    constructor(nome,cognome, eta, email, matricola, corsoDiLaurea) { //accetta tutti i parametri sia quelli della nuova che quelli del padre
        super(nome, cognome, eta, email); //con il metodo super() si inseriscono le proprieta che eredita dal padre
        this.matricola = matricola,
        this.corsoDiLaurea = corsoDiLaurea
    }
    stampaInformazioni(){
        console.log(this.saluta());
        console.log(`Il nome: ${this.nome}`);
        console.log(`Il cognome: ${this.cognome}`);
        console.log(`L'età: ${this.eta}`);
        console.log(`L'email: ${this.email}`);
        console.log(`La matricola: ${this.matricola}`);
        console.log(`Il corso di laurea: ${this.corsoDiLaurea}`);
    }
}

const filippo = new Studente("Filippo", "Maldera", 26, "filippo42@gmail.com", "70771", "informatica");
const maria = new Studente("Maria", "Pisca", 30, "mariapis@gmail.com", "78098", "geometra");

filippo.stampaInformazioni()

maria.stampaInformazioni()