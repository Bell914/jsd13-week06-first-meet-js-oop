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
        this.wingSpan = wingSpan;
    }
// this is an example of Polymorphism; overriding the makeSound method
    makeSound(){
        console.log(`${this.name} chirps: Tweet tweet!`);
    
    }

        }
    const zazu = new Bird("Zazu", "Hornbill", "2 feet");
    const simba = new Mammal("Simba", "Lion", "Golden");