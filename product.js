// Product Display Logic
const productsContainer = document.getElementById("productsContainer");

function displayProducts() {
    products.forEach(function(product) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const emojiElement = document.createElement("div");
        emojiElement.className = "product-emoji";
        emojiElement.textContent = product.emoji;

        const nameElement = document.createElement("div");
        nameElement.className = "product-name";
        nameElement.textContent = product.name;

        const priceContainer = document.createElement("div");
        priceContainer.className = "product-price";

        const currencySpan = document.createElement("span");
        currencySpan.className = "product-currency";
        currencySpan.textContent = product.currency;

        const priceSpan = document.createElement("span");
        priceSpan.textContent = " " + product.price;

        priceContainer.appendChild(currencySpan);
        priceContainer.appendChild(priceSpan);

        const buttonElement = document.createElement("button");
        buttonElement.className = "buy-button";
        buttonElement.textContent = "Buy Now";
        buttonElement.onclick = function() {
            handleBuyClick(product.name);
        };

        productCard.appendChild(emojiElement);
        productCard.appendChild(nameElement);
        productCard.appendChild(priceContainer);
        productCard.appendChild(buttonElement);

        productsContainer.appendChild(productCard);
    });
}

function handleBuyClick(productName) {
    alert("You clicked Buy Now for: " + productName);
}

// Run the display function when page loads
displayProducts();
