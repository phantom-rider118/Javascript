// Sistemare la funzione in modo tale che non prendiamo errori in console.
// Inoltre, spiegare brevemente come mai al momento la funzione è sbagliata.


function canPlay() {
  let sport = " Football";
  let personName = "Cosimo";
    
  console.log(personName + sport);
}
canPlay()

//La funzione genera errore perchè stava cercando di accedere alla variabile personName, definita all'interno di un blocco if, quindi non accessibile dall'esterno dello scope