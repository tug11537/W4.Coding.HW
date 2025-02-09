let myLetVariable = "Hello";
const myConstVariable = 42;


let myArray = [10, "banana", true];
myArray.push([1, 2, 3]);
myArray.push("added string");
myArray.shift();
myArray[1] = 345;
myArray[2] = false;

let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

i = 0;
while (i < myArray.length) {
    console.log(typeof myArray[i]);
    i++;
}

let myScale = ["C", "D", "E", "F", "G", "A", "B"];

i = 0;
while (i < myScale.length) {
    console.log(typeof myScale[i]);
    i++;
}
console.log(myScale);
i = 0;
while (i < myScale.length) {
    if (myScale[i] === "F") {
        myScale[i] = "F#";
    } else if (myScale[i] === "B") {
        myScale[i] = "Bb";
    }
    i++;
}
console.log("Modified myScale array:", JSON.stringify(myScale));
