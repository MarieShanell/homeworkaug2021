// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function Animal(name, color, weight, personality) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.personality = personality;
  this.bio = `${this.name} is ${this.color} and weighs ${this.weight} pounds`;
}
// create a new instance on an Animal
const Jewels = new Animal("Jewels", "tan", 6, "sassy");
console.log(Jewels.bio);
// add methods to the Animal prototype
Animal.prototype.greet = function() {
  return `Hey how are you`;
};
console.log(Jewels.greet());
// attach a method directly to the Animal instance that "overwrites" a prototype method
Jewels.greet = function() {
  return `Get away from me`;
};
console.log(Jewels.greet());
