/**
 * THE BASE CLASS (Encapsulation)
 */
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 50;
  }

  // a method to check status
  getStatus() {
    if (this.hunger <= 0) return "Full";
    if (this.hunger <= 20) return "Satisfied";
    return "Hungry";
  }

  // logic to change internal state
  eat() {
    if (this.hunger <= 0) {
      console.log(`${this.name} is already full!`);
    } else {
      this.hunger = this.hunger - 10;
      console.log(`${this.name} ate. Hunger is now ${this.hunger}.`);
    }
  }

  makeSound() {
    console.log(`${this.name} makes a generic animal sound.`);
    return "generic animal sound";
  }
}

/**
 * INHERITANCE
 * Bird gets everything from Animal via 'extends'
 */

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // Calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species); // Sends name/species to the Animal constructor
    this.wingSpan = wingSpan;
  }

  // POLYMORPHISM
  // Replacing the generic sound with a bird-specific one
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
    return "chirps: Tweet! Tweet!";
  }

  fly() {
    console.log(`${this.name} spreads wings (${this.wingSpan}) and flies!`);
  }
}

/**
 * THE ZOO MANAGER
 * A class to hold and run our animal objects
 */
class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}.`);
  }

  showAllAnimals() {
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    this.animals.forEach((animal) => {
      // Accessing properties and calling methods
      // console.log("here ->", animal);
      // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));
      console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      animal.makeSound();
      animal.eat();
      console.log("-------------------");
    });
  }
}

// --- EXECUTION ---

const myZoo = new Zoo("The JS Terminal Zoo");

// Create instances
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "brown");
const simba = new Mammal("Simba", "Lion", "tawny");
const remy = new Mammal("Remy", "Rat", "grey");

// Add them to the zoo
myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);
myZoo.addAnimal(simba);
myZoo.addAnimal(remy);

// Run the routine
myZoo.showAllAnimals();

// --- STORY TIME ---
console.log("\n==============================================");
console.log("A Tale: One Afternoon at the Zoo");
console.log("==============================================\n");

console.log(`After flying around all morning, ${zazu.name} the Hornbill with a ${zazu.wingSpan} wingspan started feeling hungry.`);
console.log(`So it swooped down to peck at the food that had been laid out.`);
zazu.eat();
console.log("");

console.log(`Once full, ${zazu.name} lifted its head to the sky and let out a loud call:`);
zazu.makeSound();
console.log(`${zazu.name}'s call echoed so far that every other animal in the zoo could hear it.`);
console.log("");

console.log(`Meanwhile, in a small corner of the kitchen, ${remy.name} the little ${remy.furColor} rat was busy cooking.`);
console.log(`${remy.name} has been cooking for ${zazu.name} and the whole zoo. The delicious smell filled the kitchen.`);
remy.eat();
console.log("");

console.log(`Not far away, ${baloo.name} the big ${baloo.furColor} bear sat carefully grooming its own fur.`);
baloo.groom();
baloo.makeSound();
console.log("");

console.log(`${simba.name} the ${simba.furColor} lion and ${leo.name} the ${leo.species} were resting under the shade.`);
leo.makeSound();
simba.makeSound();
console.log("");

console.log(`That afternoon, even though each animal went about their own business, they all lived together happily at ${myZoo.zooName}.`);
console.log("\n==============================================");
console.log("The End ");