// Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:
// Dopo ogni operazione inserire il console.log() del nostro array names

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Rimuovere il nome "Giovanni" dal nostro array
names.pop();
console.log(names);

// Aggiungere il nome "Pippo" alla coda del nostro array
names.push("Pippo");
console.log(names);

// Aggiungere il nome "Giovanni" come primo elemento del nostro array
names.unshift("Giovanni");
console.log(names);
