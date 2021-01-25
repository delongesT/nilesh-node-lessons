// Array :

let arr = ["A", "B", "C", "D", "E", "B"];

// Length
console.log("+ Length ", arr.length);

// Index Of
console.log("+ Index of B ", arr.indexOf("B"));

// Latest or last index
console.log("+ Last Index of B ", arr.lastIndexOf("B"));

// Push
arr.push("R");
console.log("+ After push ", arr)

// Pop
arr.pop("R");
console.log("+ After pop ", arr)

for (var i =0; i < arr.length; i++){
    var element = arr[i];
    console.log(">> element ", element)
}

arr.map(function(el, index){
    console.log(`Element at pos ${index} is ${el}`)
})