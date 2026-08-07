const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url).then((response) => {
  return response.json();
});