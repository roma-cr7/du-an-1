const products = [
  {id: 1, name: "Samsung Galaxy A15 LTE 8GB 128GB", price: 4290000, image: "./img/IP 15.webp"},
  {id: 2, name: "Samsung Galaxy A36 5G 8GB 128GB", price: 7990000, image: "./img/SS a36.webp"},
  {id: 3, name: "Samsung Galaxy S24 FE 5G 8GB 128GB", price: 12990000, image: "./img/X15 Ultra 5G.webp"},
  {id: 4, name: "Samsung Galaxy A06 4GB 128GB", price: 3190000, image: "./img/SS a36.webp"},
  {id: 5, name: "Samsung Galaxy M55 5G 8GB 256GB", price: 7890000, image: "./img/SS m55.webp"},
  {id: 6, name: "Samsung Galaxy Z Fold 6 12GB 256GB", price: 37690000, image: "./img/SS a06.webp"},

  {id: 7, name: "iPhone 15 128GB | Chính hãng VN/A", price: 15990000, image: "./img/IP 15.webp"},
  {id: 8, name: "iPhone 16e 128GB | Chính hãng VN/A", price: 16290000, image: "./img/IP16e.webp"},
  {id: 9, name: "iPhone 13 Pro Max 128GB | Chính hãng VN/A", price: 21990000, image: "./img/IP13prm.webp"},
  {id: 10, name: "iPhone 16 Pro 512GB | Chính hãng VN/A", price: 28590000, image: "./img/IP 16pr.webp"},
  {id: 11, name: "iPhone 14 Pro 128GB | Chính hãng VN/A", price: 22990000, image: "./img/IP 14pr.webp"},
  {id: 12, name: "iPhone 11 128GB | Chính hãng VN/A", price: 9490000, image: "./img/IP 11.webp"},

  {id: 13, name: "Samsung Galaxy S25 Ultra 12GB 256GB", price: 27990000, image: "./img/SS S25 Ultra.webp"},
  {id: 14, name: "Xiaomi POCO X7 Pro 5G 12GB 256GB", price: 9190000, image: "./img/X poco.webp"},
  {id: 15, name: "Xiaomi 15 Ultra 5G 16GB 512GB", price: 32990000, image: "./img/X15 Ultra 5G.webp"},
  {id: 16, name: "Xiaomi Redmi Note 13 Pro 5G 8GB 256GB", price: 7790000, image: "./img/IP13prm.webp"},
  {id: 17, name: "Xiaomi Redmi Note 12 Pro 5G", price: 6590000, image: "./img/IP 12prm.webp"},
  {id: 18, name: "Xiaomi Redmi 13C 6GB 128GB", price: 2990000, image: "./img/X 13C.webp"},
];


//Gọi hàm hiển thị sản phẩm
function displayProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="phone--card">
        <div class="phone--produce">
          <div class="img">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="phone--produce__text">
            <h2>${product.name}</h2>
            <p>${product.price.toLocaleString()}<span>₫</span></p>
            <div class="btn-group">
              <button class="btn btn-detail" onclick="window.location.href='./produs.html'">
                Chi tiết
              </button>
              <button class="btn btn-add" onclick="addToCart(${product.id})">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

window.onload = displayProducts;