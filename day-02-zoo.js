import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * ============================
 * CLASSES
 * ============================
 */

class Animal {
  constructor(name, symbol, species) {
    this.name = name;
    this.symbol = symbol;
    this.species = species;
    this.hunger = 50;
  }

  getStatus() {
    if (this.hunger <= 0) return "Full";
    if (this.hunger <= 20) return "Satisfied";
    return "Hungry";
  }

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
  }

  // NEW: describe() returns a summary string about this animal
  describe() {
    return `${this.name} the ${this.species} (${this.getStatus()})`;
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name, "🦁", "lion");
  }

  // NEW: calls the parent's makeSound() first (super.makeSound()),
  // then adds the Lion-specific sound on top of it.
  makeSound() {
    super.makeSound();
    console.log(`${this.name} lets out a mighty ROAR!`);
  }
}

class Elephant extends Animal {
  constructor(name) {
    super(name, "🐘", "elephant");
  }

  makeSound() {
    super.makeSound();
    console.log(`${this.name} trumpets loudly!`);
  }
}

class Bird extends Animal {
  // species is passed in so a Bird can be a specific kind, e.g. "hornbill"
  constructor(name, species = "bird") {
    super(name, "🦜", species);
  }

  makeSound() {
    super.makeSound();
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}

class Bear extends Animal {
  constructor(name) {
    super(name, "🐻", "bear");
  }

  makeSound() {
    super.makeSound();
    console.log(`${this.name} growls softly.`);
  }
}

class Visitor {
  constructor(name) {
    this.name = name;
    this.currentIndex = 0; // position along zooPath
  }
}

/**
 * ============================
 * DATA: animals + zooPath
 * ============================
 */

const animals = [
  new Lion("Simba"),
  new Elephant("Ella"),
  new Bird("Zazu", "hornbill"),
  new Bear("Baloo"),
];

const zooPath = [
  {
    symbol: "🚪",
    name: "Entrance",
    description:
      "The main entrance to the zoo. The morning visitors are arriving.",
  },
  {
    symbol: animals[0].symbol,
    name: "Lion enclosure",
    animal: animals[0],
  },
  {
    symbol: "🌳",
    name: "Garden",
    description: "A quiet garden with large trees and shaded benches.",
  },
  {
    symbol: animals[1].symbol,
    name: "Elephant enclosure",
    animal: animals[1],
  },
  {
    symbol: animals[2].symbol,
    name: "Aviary",
    animal: animals[2],
  },
  {
    symbol: animals[3].symbol,
    name: "Bear habitat",
    animal: animals[3],
  },
  {
    symbol: "🍽️",
    name: "Food court",
    description: "The food court smells like popcorn and fresh fruit.",
  },
];

const zooName = "JS Terminal Zoo";
const visitor = new Visitor("BM");

/**
 * ============================
 * DISPLAY / GAME FUNCTIONS
 * ============================
 */

function showZooDirectory() {
  console.log("\nZoo directory");
  console.table(
    animals.map((animal) => ({
      name: animal.name,
      species: animal.species,
      symbol: animal.symbol,
    })),
  );
}

function displayZoo() {
  const symbolsRow = zooPath.map((location) => location.symbol).join(" – ");
  const markerRow = zooPath
    .map((location, index) => (index === visitor.currentIndex ? "🧍" : "▢"))
    .join(" – ");

  console.log(`\n=== ${zooName} ===`);
  console.log(symbolsRow);
  console.log(markerRow);
}

function inspectLocation() {
  const location = zooPath[visitor.currentIndex];

  console.log(`\nYou are at: ${location.name}`);

  if (location.animal) {
    // NEW: use describe() for a one-line summary, then play its sound
    console.log(location.animal.describe());
    location.animal.makeSound();
  } else {
    console.log(location.description);
  }
}

function feedAnimalAtLocation() {
  const location = zooPath[visitor.currentIndex];

  if (location.animal) {
    location.animal.eat();
  } else {
    console.log(`There is no animal here to feed.`);
  }
}

// Simulates the zookeeper getting the feed ready when the zoo opens.
// Uses setTimeout so it runs in the background without blocking
// the rest of the program (visitors can keep exploring/typing commands).
function prepareAnimalFood() {
  console.log("\nThe zookeeper is preparing the animal feed...");

  setTimeout(() => {
    console.log("\nThe animal feed is ready.");
  }, 3000);

  console.log("Visitors can continue exploring.");
}

/**
 * ============================
 * MOVEMENT + COMMAND HANDLING
 * ============================
 */

async function addAnimalFromAPI() {
  const url = "https://api.api-ninjas.com/v1/animals?name=cat";

  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": "q2zfRPiEpx9nvpTZ6atW9PWxJBebLwSPtnZLcPIt",
      },
    });

    const data = await response.json();

    const apiAnimal = data[0];

    const newAnimal = new Animal(
      apiAnimal.name,
      "🐱",
      apiAnimal.taxonomy.class
    );

    animals.push(newAnimal);

    zooPath.push({
      symbol: "🐱",
      name: `${apiAnimal.name} Habitat`,
      animal: newAnimal,
    });

    console.log(`${newAnimal.name} has been added!`);

  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

async function handleCommand(command) {
  if (command === "r") {
    if (visitor.currentIndex < zooPath.length - 1) {
      visitor.currentIndex++;
      console.log(`${visitor.name} walks to the right`);
    } else {
      console.log(`You are already at the end of the path.`);
    }
  } else if (command === "l") {
    if (visitor.currentIndex > 0) {
      visitor.currentIndex--;
      console.log(`${visitor.name} walks to the left`);
    } else {
      console.log(`You are already at the start of the path.`);
    }
  } else if (command === "i") {
    inspectLocation();
  } else if (command === "d") {
    showZooDirectory();
  } else if (command === "f") {
    feedAnimalAtLocation();
  } else if (command === "a") {
    await addAnimalFromAPI();
  } else {
    console.log("Please enter l, r, i, d, f, a, q");
  }
}

async function askForCommand() {
  rl.question(
    "\n[l] Left | [r] Right | [i] Inspect | [d] Directory | [f] Feed | [a] Add Animal | [q] Quit\n> ",
    async (answer) => {
      const command = answer.trim().toLowerCase();

      if (command === "q") {
        console.log("\nThank you for visiting the JS Terminal Zoo.");
        rl.close();
        return;
      }

      await handleCommand(command);
      displayZoo();
      askForCommand();
    },
  );
}

// --- START ---
console.log(`Welcome to the ${zooName} Explorer.`);
showZooDirectory();
displayZoo();
inspectLocation();
prepareAnimalFood();
askForCommand();