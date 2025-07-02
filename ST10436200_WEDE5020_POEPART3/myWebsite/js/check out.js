document.addEventListener('DOMContentLoaded', () => {
    const orderItemsContainer = document.getElementById('order-items');
    const checkoutTotal = document.getElementById('checkout-total');

    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        checkoutTotal.textContent = 'R 0.00';
        return;
    }

    let totalPrice = 0;

    // Iterate through the cart items and display them
    cartItems.forEach(item => {
        const name = item.name || 'Unknown Item';
        const price = item.price || 0;
        const quantity = item.quantity || 1; // Default to 1 if quantity is missing
        const itemTotal = price * quantity;

        totalPrice += itemTotal;

        // Create and append item details to the order summary
        const itemElement = document.createElement('p');
        itemElement.textContent = `${name} (x${quantity}): R ${itemTotal.toFixed(2)}`;
        orderItemsContainer.appendChild(itemElement);
    });

    // Display the total price
    checkoutTotal.textContent = `R ${totalPrice.toFixed(2)}`;
});

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your order! Your payment has been processed.');

    // Clear the cart
    localStorage.removeItem('cart');

    // Redirect to home or confirmation page
    window.location.href = 'home.html';
});
