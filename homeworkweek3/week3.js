let pizzaToppings = ["Sausage", "Onions", "Bacon", "Pineapple"];
function greetCustomer() {
  let greeting = "Welcome to SaucyDough, our toppings are:";
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`one ${size} ${crust} crust with  ${toppings} coming up`);
}
getPizzaOrder("large", "thin", "sausage", "bacon");

function preparePizza(...myArray) {
  const myPizzaObject = {
    Size: myArray[0],
    Crust: myArray[1],
    Toppings: []
  };
  console.log(myArray.length);
  // const myL=myArray.length;
  let x = 2;
  for (x = 2; x < myArray.length; x++) {
    myPizzaObject.Toppings[x] = myArray[x];
    console.log(myPizzaObject.Toppings[x], x);
  }
}
preparePizza(pizzaToppings);

function servePizza()
  console.log(`pizza is ready ${servePizza} enjoy!`);

servePizza();

//  console.log(get)
//  preparePizza();

// function preparePizza(size, crust, ...toppings);

// function servePizza();{
//   size: "large";
