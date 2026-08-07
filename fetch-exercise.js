// ประกาศ Class Animal และ ตัวแปรสำหรับเก็บข้อมูล
class Animal {
    constructor(name, taxonomyClass, symbol, sound) {
        this.name = name;
        this.taxonomyClass = taxonomyClass;
        this.symbol = symbol;
        this.sound = sound;
    }
}

const animals = [];
const zooPath = [];

async function addAnimalFromAPI() {
    const url = "https://api.api-ninjas.com/v1/animals?name=cat"

    try {
       const response = await fetch(url,{
            headers: {
               "X-Api-Key" : "q2zfRPiEpx9nvpTZ6atW9PWxJBebLwSPtnZLcPIt",
            }
         });

       const data = await response.json();

       const apiAnimal = data[0];

       const newAnimal = new Animal(
            apiAnimal.name,
            apiAnimal.taxonomy.class,
            ":cat:",
            "meow meow!"
        );

        animals.push(newAnimal);

        zooPath.push({
            symbol: ":cat:",
            name: `${apiAnimal.name} Habitat`,
            animal: newAnimal,
        });

        console.log(`${newAnimal.name} has been added!`);

    } catch (error) {
       console.error("Something went wrong!", error)
    }
}

addAnimalFromAPI();
