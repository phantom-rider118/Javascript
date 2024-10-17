// Esercizio 1: Generatore di indovinelli

// Funzioni:
// generaNumero: Genera un numero casuale tra un minimo e un massimo definito dall'utente.
// generaOperazione: Sceglie casualmente un'operazione aritmetica (+, -, *, /).
// creaIndovinello: Combina il numero generato, l'operazione e un altro numero casuale per creare un indovinello.
// controllaRisposta: Verifica se la risposta dell'utente è corretta.
// Struttura:
// Chiedi all'utente di scegliere il livello di difficoltà (influenza il range dei numeri).
// Genera un indovinello.
// Chiedi all'utente di inserire la risposta.
// Verifica la risposta e fornisci un feedback.
// Ripeti finché l'utente non decide di fermarsi.

function generaNumero(minimo, massimo){
    //l'ampiezza indica quanto deve essere deve essere ampio la scelta dell'utente
    const ampiezza = massimo - minimo +1 // +1 e per includere massimo e minimo
    const numeroCasuale = Math.floor(Math.random()*ampiezza)
}