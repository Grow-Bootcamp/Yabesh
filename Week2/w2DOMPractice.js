const input = document.getElementById("productInput");
const button = document.getElementById("addButton");
const list = document.getElementById("productList");

button.addEventListener("click", () => {
  const productName = input.value.trim();

  if (productName === "") {
    alert("Please enter a product");
    return;
  }

  const li = document.createElement("li");

  li.textContent = productName;

  list.appendChild(li);

  input.value = "";
});
