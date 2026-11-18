import axios from "axios";

async function getData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

getData();