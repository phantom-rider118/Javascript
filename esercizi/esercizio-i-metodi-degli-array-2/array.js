// Partendo dal seguente oggetto students:

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

// rimuovere Giovanni
students.pop();
console.log(students);

// aggiungere lo studente Francesco
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students);

//oppure si puo fare utilizzando il metodo filter()
//crea una nuova costante con all'interno gli stessi elementi di students, mette tutti gli elementi diversi da "Giovanni"
const studentsNew = students.filter((students) => students.name !== "Giovanni"); //condizione è che il nome deve essere diverso da "Giovanni"
studentsNew.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 }); //aggiunge alla nuova costante "Francesco"
console.log(studentsNew);
