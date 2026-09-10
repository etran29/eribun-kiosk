const backButton = document.getElementById("back-button");
const categoryButtons = document.querySelectorAll(".category-button"); //for all the buttons
const productCards = document.querySelectorAll(".product-card");

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

backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
