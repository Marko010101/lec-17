let errorMesage = "";

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("ERROR FROM TRY BLOCK");
    }

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    errorMesage = error.message;
  }
}

const data = fetchPosts();
