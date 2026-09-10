const backButton = document.getElementById("back-button");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");

cart.forEach((item) => {
  const product = document.createElement("div");
  product.classList.add("cart-item");
  product.textContent = `${item.name} × ${item.quantity}`;
  cartItems.appendChild(product);
});

backButton.addEventListener("click", () => {
  window.location.href = "menu.html";
});
