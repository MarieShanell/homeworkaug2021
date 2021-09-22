// refactor your Animal function constructor and methods to use the class keyword
class Animal { (name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;
}

// extend the Animal class with a type of animal
class Yorkie extends Animal {
    constructor( name, color, weight, eyecolor) {
      super(name , color, weight);
      this.eyecolor = eyecolor;
    }
    greet() {
         
    }
  }
// add some unique methods and properties to the class extension
greet() {
    return `hey my name is ${this.name} i have a ${this.color} and im ${this.weight} pounds``
}
// create an instance of the class extension and call one of its methods

const Jewels = new Yorkie ("Jewels", "Yorkie", "5")
Jewels.greet();