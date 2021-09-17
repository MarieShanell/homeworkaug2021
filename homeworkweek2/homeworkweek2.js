const { link } = require("fs");

const PizzaPlace = "SaucyDough";
let numberOfToppings = 7;

console.log(
  `Hello, welcome to ${PizzaPlace}  where we serve ${numberOfToppings}  different  delicious toppings!! `
);

console.log(typeof PizzaPlace, PizzaPlace);
console.log(typeof numberOfToppings, numberOfToppings);

if (numberOfToppings < 10) {
  console.log("Quality,not quantity");
} else {
  console.log("A whole lot of pizza.");
}
for (let i = 1; i <= numberOfToppings; i++) {
  // console.log(i % == 2);

  if (i % 2 === 0) {
    console.log(i);
  }
}
