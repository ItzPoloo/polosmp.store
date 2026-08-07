let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
  if (!document.getElementById('cartDrawer').classList.contains('open')) toggleCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const items = document.getElementById('cartItems');
  const count = document.getElementById('cartCount');
  const total = document.getElementById('cartTotal');

  count.textContent = cart.length;
  total.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  items.innerHTML = cart.length
    ? cart.map((item, i) => `
      <div class="cart-item">
        <div><strong>${item.name}</strong><br><span>$${item.price.toFixed(2)} USD</span></div>
        <button class="remove" onclick="removeItem(${i})">Remove</button>
      </div>`).join('')
    : '<p class="small">Your cart is empty.</p>';
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

document.getElementById('cartBtn').addEventListener('click', toggleCart);

function copyIP() {
  navigator.clipboard.writeText('polosmp.mcsh.io');
  alert('Server IP copied!');
}

function checkout() {
  alert('Add your Tebex or checkout URL in script.js to make checkout live.');
}
