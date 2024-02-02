// Define the base class 'Animal'
class Animal {
  constructor(name, species, habitat) {
      this.name = name;
      this.species = species;
      this.habitat = habitat;
  }

  makeSound() {
      // Placeholder for making a sound
  }

  move() {
      // Placeholder for the movement method
  }
}

// Inheritance: Creating subclasses for specific types of animals

class Mammal extends Animal {
  constructor(name, species, habitat, furColor) {
      super(name, species, habitat);
      this.furColor = furColor;
  }

  giveBirth() {
      // Placeholder for giving birth method
  }
}

class Bird extends Animal {
  constructor(name, species, habitat, wingspan) {
      super(name, species, habitat);
      this.wingspan = wingspan;
  }

  fly() {
      // Placeholder for flying method
  }
}

class Fish extends Animal {
  constructor(name, species, habitat, scaleType) {
      super(name, species, habitat);
      this.scaleType = scaleType;
  }

  swim() {
      // Placeholder for swimming method
  }
}

// Abstraction: Hiding the implementation details

class Reptile extends Animal {
  constructor(name, species, habitat, scaleType) {
      super(name, species, habitat);
      this.scaleType = scaleType;
  }

  move() {
      console.log(`${this.name} slithers or crawls`); // Specific implementation for reptiles
  }
}

// Polymorphism: Using a common interface for different types of animals

function performActivity(animal) {
  animal.move();
  animal.makeSound();
}

// Example Usage:

const lion = new Mammal("Simba", "Lion", "Grassland", "Golden");
const parrot = new Bird("Polly", "Parrot", "Rainforest", 30);
const shark = new Fish("Jaws", "Great White Shark", "Ocean", "Cartilaginous");

performActivity(lion);
performActivity(parrot);
performActivity(shark);

const snake = new Reptile("Slippy", "Python", "Forest", "Smooth");
performActivity(snake);
