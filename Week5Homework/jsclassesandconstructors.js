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

const Pepper = new Yorkie("Pepper", "black", "small", "play");
console.log(Pepper.greet());

class personality extends Dog{
  constructor(name, color, size, hobbies, personality){
    super(name, color, size,hobbies);
    this.personality = personality;
  }

greet(){
    return `Hello I'm ${this.name} and I'm very ${this.personality}`;
}
}

const Dream = new personality("Dream", "black", "small", "play", "sassy");
console.log(Dream.greet());