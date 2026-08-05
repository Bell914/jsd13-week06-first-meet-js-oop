class Animal {
    constructor(name,species){
        this.name =name;
        this.species = species;
        this.hunger = 50;

    }
    makeSound(){
        console.log(`${this.name} makes a sound .... `);
        

    }
    eat(){
        this.hunger = this.hunger - 10;
        console.log(
            `${this.name} ate, Hunger level is now ${this.hunger}.`,
        );

        }    
    } 
    //opject instans
const leo = new Animal("Leo","Lion");
console.log(leo);

console.log(leo.hunger);
leo.eat();
console.log(leo.hunger);

// specialized class(Inhertance)

class Mammal extends Animal{
    constructor(name,species,furColor){
         super(name, species);
        this.furColor = furColor;

    }
    groom(){
        console.log(`${this.name} is brushing their ${this.furColor} fur.`)
    }
}
class Bird extends Animal{
    constructor(name,species,wingSpan){
        super(name, species);
        this.wingSpan = wingSpan;

    }
// this is an example of Polymorphism; overriding the makeSound method
    makeSound(){
        console.log(`${this.name} chirps: Tweet tweet!`);
        return "chirps: Tweet! Tweet!";
    
    }

        }

    const zazu = new Bird("Zazu", "Hornbill", "2 feet");
    const bear = new Mammal("Baloo", "Bear", "brown");
    const giraffe = new Mammal("Memo", "Giraffe", "yellow");
    const rat = new Mammal("Remy", "Rat", "grey");
    const maru = new Mammal("Maru", "Cat", "Orange");

    zazu.eat();
    zazu.makeSound();


    console.log(`${rat.name} is cooking for ${zazu.name}, while ${bear.name} is grooming their ${bear.furColor} fur, ${giraffe.name} is eating leaves, and ${maru.name} is napping in the sun.`);
