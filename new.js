
document.getElementById('modeToggle').addEventListener('click', function() {
   
    var navbar = document.getElementById('navbar');
    var body = document.body;
    if (navbar.classList.contains('navbar-dark')) {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
      body.style.backgroundColor = '#bfc9d2'; // Light mode background
    } else {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
      body.style.backgroundColor = '#343a40'; // Dark mode background
    }
});
  document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        
        // Toggle active class
        parent.classList.toggle('active');

        // Close other open FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            if (faq !== parent) {
                faq.classList.remove('active');
            }
        });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(service, price);
        });
    });

    function addToCart(service, price) {
        cart.push({ service, price });
        updateCart();
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price;
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.textContent = `${item.service} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(listItem);
        });

        totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your purchase!');
        // Here you would normally handle the form submission to the server
    });
});


