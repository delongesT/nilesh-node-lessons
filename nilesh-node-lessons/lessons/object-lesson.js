var Person = {
    "name":"Prashant",
    "age":78,
    "isIndianCitizen": true,
    "address":"401, Mira road"
}

// If an obj contains a
// certain prop
console.log(Person.hasOwnProperty("name"));

// If prop fathersName is not avlbl
// add it
if(!Person.hasOwnProperty("fathersName")){
    Person["fathersName"] = "Bill"
}
console.log("W fathersname ", Person);

// delete
// fathers name
delete Person["fathersName"];
console.log("W/o fathersname ", Person);

let propsInPerson = Object.keys(Person);
console.log("_ Keys ", propsInPerson)

let valuesInPerson = Object.values(Person);
console.log("_ values ", valuesInPerson)

// Loop
// for-in
for (var key in Person) {
    console.log(`${key} is ${Person[key]}`)
}