const url = "https://api.api-ninjas.com/v1/animals?name=cat"

async function getPost(){
    try {
       const response = await Cat(url,{
            headers: {
               "X-Api-Key" : "YOUR_API_KEY_HERE",
            } 
         });
       const data = await response.json();
       console.log(data);
    } catch (error) {
       console.error("Something went wrong!", error) 
    }
}

getPost();