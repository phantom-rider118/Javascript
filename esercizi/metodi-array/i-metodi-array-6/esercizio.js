// In questo esercizio dato un array di studenti:
// Utilizzato forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizzato reduce per calcolare la media dei voti degli studenti.
// Utilizzato map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//Stampare i nomi degli studenti
studenti.forEach((studente) => console.log(studente.nome));

//trovare studenti con voto > 90
let votoAlto = studenti.find((studente) => studente.voto > 90);
console.log(votoAlto);

// calcolare la media dei voti degli studenti
let mediaStudenti = studenti.reduce((sum, studente) => sum + studente.voto,0);
let media = mediaStudenti / studenti.length;

//nuovo array contenente i nomi degli studenti in maiuscolo.
const nomiMaiuscolo = studenti.map(studente => studente.nome.toUpperCase())
console.log(nomiMaiuscolo)

//trovare gli studenti con voti superiori a 85.
let votoAltoFilter = studenti.filter((studente) => studente.voto > 85);
console.log(votoAltoFilter);