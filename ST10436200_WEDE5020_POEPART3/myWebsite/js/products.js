// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.btn');

// Update the cart count displayed in the header
function updateCartCount() {
    cartCount.innerText = cart.length;
}

// Function to handle the "Add to Cart" button click
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = parseFloat(
            productCard.querySelector('.price').innerText.replace('R ', '')
        );

        const product = { name: productName, price: productPrice };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${productName} has been added to your cart!`);
    });
});

// Initialize cart count on page load
updateCartCount();
