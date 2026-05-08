let cart = [];

export function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveToLocalStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveToLocalStorage();
}

export function increaseQty(productId) {
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity += 1;
    saveToLocalStorage();
  }
}

export function decreaseQty(productId) {
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveToLocalStorage();
  }
}

export function clearCart() {
  cart = [];
  saveToLocalStorage();
}

export function isInCart(productId) {
  return cart.some((item) => item.id === productId);
}

export function getCartItems() {
  return [...cart];
}

export function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function saveToLocalStorage() {
  localStorage.setItem("shopease_cart", JSON.stringify(cart));
}

export function loadFromLocalStorage() {
  const saved = localStorage.getItem("shopease_cart");
  if (saved) {
    cart = JSON.parse(saved);
  }
}
