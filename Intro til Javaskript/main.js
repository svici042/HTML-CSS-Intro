console.log("Hello World!");
let num = 1 + 1;
num = 15;
console.log(num);
let name = "Slava";
console.log(name);
const pi = 3.141;
console.log(pi);

// *Data structure*/

// Array
const shopinglist = [
    "Egg", 
    "Melk", 
    "Brød", 
    "Smør"
];

console.log(shopinglist[0]);
console.log(shopinglist.length);


// for loop example

for (let counter = 0; counter < shopinglist.length; counter++) {
    console.log(shopinglist[counter]);
}

// Display shopping list on the page
document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('shopping-list');
    
    for (let i = 0; i < shopinglist.length; i++) {
        const li = document.createElement('li');
        li.textContent = shopinglist[i];
        listContainer.appendChild(li);
    }
});

// let num2 = 0;

// for (let i = 0; i < 15; i++) {
//     num2 += i;
// }
// console.log(num2);

// Object data structure
const person = {
    name: "Slava",
    age: 44,
    hobbies: ["programming", "gaming", "cooking"]
};

const Slava = person;
Slava.name = "Slava";
Slava.age = 44;
Slava.hobbies = ["programming", "gaming", "cooking"];

console.log(Slava);
