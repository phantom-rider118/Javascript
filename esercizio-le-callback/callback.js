function printName(){
    console.log("Clarissa")
}

function sayHelloName(callback){
    console.log("Hello ")
    
    setTimeout(callback,1000)
}

sayHelloName(printName)