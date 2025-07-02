  // Retrieve cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');

        function updateCartDisplay() {
            cartItemsContainer.innerHTML = ''; // Clear previous items
            let total = 0;

            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <p>${item.name} - R ${item.price.toFixed(2)}</p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
                total += item.price;
            });

            cartTotal.innerText = `R ${total.toFixed(2)}`;
            cartCount.innerText = cart.length;

            // Remove item from cart
            document.querySelectorAll('.remove-btn').forEach((button) => {
                button.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-index');
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                });
            });
        }

        // Clear cart
        document.getElementById('clear-cart').addEventListener('click', () => {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        });

        updateCartDisplay();

        document.getElementById('checkout').addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            
            if (cartItems.length === 0) {
                alert('Your cart is empty. Please add items before checking out.');
                return;
            }
        
            // Redirect to the checkout page
            window.location.href = 'check out.html';
        });
        