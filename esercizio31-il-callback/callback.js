function printName(){
    console.log("Clarissa")
}

function sayHelloName(callback){
    console.log("Hello ")
    callback();
}

sayHelloName(printName)