let user = {
    name: "Cosimo",
    age: 30,
};

let newUser = {}

for(let b in user){
    newUser[b] = user[b]
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);