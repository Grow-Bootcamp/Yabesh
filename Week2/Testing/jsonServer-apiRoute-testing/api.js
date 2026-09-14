export async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  // // line 2 sends a request to GET http://localhost:3000/users

  if(!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
  // // converts the server response into JS data
}