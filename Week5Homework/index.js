// using the class keyword to declare a class/category
class Dog {
  // the constructor function looks and acts similar to the function constructors we have been working with
  constructor(breed,size,personality ) {
    this.breed =breed;
    this.size = size;
    this.personality = personality;
this.bio = `Hey im a ${this.breed} and i may be ${this.size} but im very ${this.personality}`
    }
    console.log ()
  }
  // properties/methods outside of the scope of the constructor function attach to the Person prototype
  greet() {
    return `Hey I'm Jewels and im a ${this.breed}`;
  }

// creating instances of the Person class
const pat = new Person("Pat", 35, ["movies", "cats"]);
const mack = new Person("Mack", 31, ["music", "baseball", "TV"]);

// class TypesOfDogs {
//   constructor(breed, size) {
//     this.property1 = param1;
//     this.property2 = param2;
//   }
//   method1() {}
// }
