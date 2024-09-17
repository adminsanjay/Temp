let cart = [];

        function addToCart(productId) {
            const product = {
                id: productId,
                name: `T-shirt ${productId.split('-')[1]}`,
                price: 400
            };
            cart.push(product);
            alert(`Added ${product.name} to your cart`);
            updateCartCount();
        }

        function updateCartCount() {
            document.getElementById('cart-count').innerText = cart.length;
        }

        function viewCart() {
            const cartSection = document.getElementById('cart');
            cartSection.classList.remove('hidden');  // Show cart section

            const cartItemsDiv = document.getElementById('cart-items');
            cartItemsDiv.innerHTML = ''; // Clear previous items

            if (cart.length === 0) {
                cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                cart.forEach((item, index) => {
                    cartItemsDiv.innerHTML += `
                        <div>
                            <p>${item.name} - ₹${item.price}</p>
                            <button onclick="removeFromCart(${index})">Remove</button>
                        </div>
                    `;
                });
            }

            updateCartTotal();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);  // Remove the item from the cart
            viewCart();  // Refresh cart display
            updateCartCount();
        }

        function updateCartTotal() {
            const totalAmount = cart.reduce((total, item) => total + item.price, 0);
            document.getElementById('total-amount').innerText = totalAmount;
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                alert('Proceeding to checkout...');
                // Add payment processing logic here if needed
            }
        }
function searchItems() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let items = document.querySelectorAll('.merch-item');

    items.forEach(function(item) {
        let itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function filterItems() {
    let checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    let items = document.querySelectorAll('.merch-item');

    // Reset item visibility
    items.forEach(function(item) {
        item.style.display = "block";
    });

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let filter = checkbox.value;

            if (filter.includes('price')) {
                let sortedItems = [...items].sort(function(a, b) {
                    let priceA = parseInt(a.getAttribute('data-price'));
                    let priceB = parseInt(b.getAttribute('data-price'));
                    return filter === 'price-low-high' ? priceA - priceB : priceB - priceA;
                });

                let parent = document.querySelector('.merchandise-grid');
                parent.innerHTML = "";
                sortedItems.forEach(function(item) {
                    parent.appendChild(item);
                });
            } else {
                items.forEach(function(item) {
                    if (!item.getAttribute('data-type').includes(filter)) {
                        item.style.display = "none";
                    }
                });
            }
        }
    });
}
// script.js (Frontend JavaScript)
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/data')
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Should log: 'Hello from the backend!'
      })
      .catch(error => console.error('Error:', error));
  });
  