// script.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = { id: productId, quantity: 1 };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

function checkout() {
    window.location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = cart
        .map(item => `<div>Product ID: ${item.id}, Quantity: ${item.quantity}</div>`)
        .join('');
}
