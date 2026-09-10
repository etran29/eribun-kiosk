const backButton = document.getElementById("back-button");
const cartButton = document.getElementById("cart-button");
const categoryButtons = document.querySelectorAll(".category-button"); //for all the buttons
const productCards = document.querySelectorAll(".product-card");
const addToCartButtons = document.querySelectorAll(".add-button");
const cartCount = document.querySelector(".cart-button span");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;

function showAllProducts() {
  productCards.forEach((product) => {
    product.classList.remove("hidden");
  });
}

function filterProducts(category) {
  //if the customer selected "All"
  if (category === "all") {
    showAllProducts();
    return;
  }
  //otherwise, check every product
  productCards.forEach((product) => {
    const productCategory = product.dataset.category;

    //show the product if it matches
    if (productCategory === category) {
      product.classList.remove("hidden");
    }
    //hide the product if it doesn't match
    else {
      product.classList.add("hidden");
    }
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;
    //filter through the products
    filterProducts(selectedCategory);

    // Remove "active" from all buttons
    categoryButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // Make the clicked button active
    button.classList.add("active");
  });
});

//add products to cart
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.parentElement.parentElement;
    const productName = product.dataset.name;
    const existingProduct = cart.find((item) => item.name === productName);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        name: productName,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.textContent = cart.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  });
});

backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

cartButton.addEventListener("click", () => {
  window.location.href = "cart.html";
});
