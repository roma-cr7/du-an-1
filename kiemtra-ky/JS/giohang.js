// Lấy giỏ hàng từ LocalStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Lưu giỏ hàng vào LocalStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Thêm sản phẩm vào giỏ
function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    if (!product) return alert("Sản phẩm không tồn tại!");
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  alert("Đã thêm vào giỏ!");
}

// Cập nhật badge số lượng bên icon Cart
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const totalQty = getCart().reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalQty;
}

// Hiển thị nội dung giỏ trên trang cart.html
function displayCart() {
  const container = document.getElementById("cart-items");
  const cart = getCart();
  let html = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Giỏ hàng trống.</p>";
    document.getElementById("checkout-btn").disabled = true;
    return;
  }

  cart.forEach(item => {
    const sub = item.price * item.qty;
    total += sub;
    html += `
      <div class="cart-row">
        <img src="${item.image}" alt="${item.name}" class="cart-img">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString()}₫ x 
            <input type="number" min="1" value="${item.qty}" 
                   onchange="changeQty(${item.id}, this.value)">
            = ${sub.toLocaleString()}₫
          </p>
          <button onclick="removeFromCart(${item.id})">Xóa</button>
        </div>
      </div>
    `;
  });

  html += `<hr><h3>Tổng cộng: ${total.toLocaleString()}₫</h3>`;
  container.innerHTML = html;
}

// Thay đổi số lượng
function changeQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Number(qty);
    if (item.qty < 1) item.qty = 1;
    saveCart(cart);
    displayCart();
    updateCartBadge();
  }
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  displayCart();
  updateCartBadge();
}

// Checkout (xóa toàn bộ giỏ)
function checkout() {
  if (confirm("Xác nhận thanh toán?")) {
    localStorage.removeItem("cart");
    displayCart();
    updateCartBadge();
    alert("Thanh toán thành công!");
  }
}

// Khi DOM sẵn sàng
window.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  if (document.getElementById("cart-items")) {
    displayCart();
    document.getElementById("checkout-btn")
            .addEventListener("click", checkout);
  }
});
