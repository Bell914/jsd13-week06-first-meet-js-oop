// const url = "https://jsonplaceholder.typicode.com/posts/1";
// const url = "https://bored-api.appbrewery.com/random" // random bored API
// const url ="https://api.api-ninjas.com/v1/animals/posts/1"
const url = "https://catfact.ninja/fact"; // random cat facts
async function getPost() {
  try {
    const response = await fetch(url);
    const data = await response.json();   // แปลง JSON -> JS Object
    console.log(data);
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

getPost();