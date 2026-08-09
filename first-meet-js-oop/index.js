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


    console.log("A Tale: One Afternoon at the Zoo ");
    console.log("");

    console.log(`After flying around all morning, ${zazu.name} the Hornbill with a ${zazu.wingSpan} wingspan started feeling hungry.`);
    console.log(`So it swooped down to peck at the food that had been laid out.`);
    zazu.eat();
    console.log("");

    console.log(`Once full, ${zazu.name} lifted its head to the sky and let out a loud call:`);
    zazu.makeSound();
    console.log(`${zazu.name}'s call echoed so far that every other animal in the zoo could hear it.`);
    console.log("");

    console.log(`Meanwhile, in a small corner of the kitchen, ${rat.name} the little ${rat.furColor} rat was busy cooking.`);
    console.log(`${rat.name} is cooking for ${zazu.name}. The delicious smell filled the whole kitchen.`);
    console.log("");

    console.log(`Not far away, ${bear.name} the big ${bear.furColor} bear sat carefully grooming its own fur.`);
    bear.groom();
    console.log("");

    console.log(`Meanwhile, ${giraffe.name} the ${giraffe.furColor} giraffe stood quietly munching on green leaves from the treetops.`);
    console.log("");

    console.log(`And finally, ${maru.name} the ${maru.furColor} cat lay napping comfortably under the warm sunshine.`);
    console.log("");

    console.log(`That afternoon, even though each animal went about their own business, they all lived together happily at the zoo.`);
    console.log("The End");