// console.log("Helllo Martynas");

const casual = require("casual");
console.log(casual.city);


function number() {
    return Math.floor((Math.random() * 10) + 1);
}
console.log(number());


const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomNumber(1, 10));


console.log(`${casual.name_prefix} ${casual.first_name} ${casual.last_name}`)


const name = "Rokas";
const surname = "Andreikenas";
const fullName = name + " " + surname; // bad
const newFullName = `${name} ${surname}` // good
