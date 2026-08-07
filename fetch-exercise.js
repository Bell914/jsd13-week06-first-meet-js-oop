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

// ต้องเพิ่มคำสั่งเรียกใช้งานฟังก์ชันตรงนี้ครับ
addAnimalFromAPI();
