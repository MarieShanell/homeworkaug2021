class Dog {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class Yorkie extends Dog{
  constructor(name, color, size, hobbies){
    super(name, color, size);
    this.hobbies = hobbies;
  }

greet(){
    return `Hello I'm ${this.name} and I have a shiny ${this.color} coat`;
}
}

const Pepper = new Dog("Pepper", "black", "small", "play");
console.log(Pepper.greet());