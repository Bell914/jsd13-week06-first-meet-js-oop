// คลาส Animal สำหรับสร้าง Object ของสัตว์
class Animal {
  constructor(name, taxonomyClass, symbol, sound) {
    this.name = name;
    this.taxonomyClass = taxonomyClass;
    this.symbol = symbol;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.symbol} ${this.name} says: ${this.sound}`);
  }
}

// อาร์เรย์สำหรับเก็บข้อมูลสัตว์ และ เส้นทางในสวนสัตว์
const animals = [];
const zooPath = [];

// ฟังก์ชันดึงข้อมูลแมว (cat) จาก API และสร้าง Animal เพิ่มเข้า Zoo
async function addAnimalFromAPI() {
  const url = "https://api.api-ninjas.com/v1/animals?name=cat";

  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": "NmEQmGcDApy8ObeCjgIR9iPFdeiprrajw1DjGIHe",
      },
    });

    const data = await response.json();

    // ดึงข้อมูลสัตว์ตัวแรกจากผลลัพธ์ API
    const apiAnimal = data[0];

    const newAnimal = new Animal(
      apiAnimal.name,
      apiAnimal.taxonomy.class,
      "🐱", // หรือใช้ ":cat:"
      "meow meow!"
    );

    animals.push(newAnimal);

    zooPath.push({
      symbol: "🐱",
      name: `${apiAnimal.name} Habitat`,
      animal: newAnimal,
    });

    console.log(`${newAnimal.name} has been added!`);
    console.log("\n--- รายชื่อสัตว์ในสวนสัตว์ ---");
    console.log(animals);
    console.log("\n--- เส้นทางในสวนสัตว์ (Zoo Path) ---");
    console.log(zooPath);

  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

// เรียกใช้งานฟังก์ชัน
addAnimalFromAPI();
