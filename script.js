const products = [
  { id: 1, name: "Lamborghini Hurracan", price: "275,000đ", brand: "MiniGt", image: "https://via.placeholder.com/300x200.png?text=Lamborghini" },
  { id: 2, name: "Ferrari F40", price: "450,000đ", brand: "Tarmac", image: "https://via.placeholder.com/300x200.png?text=Ferrari+F40" },
  { id: 3, name: "Mazda RX-7", price: "365,000đ", brand: "MiniGt", image: "https://via.placeholder.com/300x200.png?text=Mazda+RX7" },
  { id: 4, name: "Nissan GTR R32", price: "500,000đ", brand: "Inno64", image: "https://via.placeholder.com/300x200.png?text=Nissan+GTR+R32" },
  { id: 5, name: "Porsche 911 GT3 RS", price: "2,200,000đ", brand: "Inno64", image: "https://via.placeholder.com/300x200.png?text=Porsche+911+GT3" },
  { id: 6, name: "Nissan Kenmeri", price: "300,000đ", brand: "MiniGt", image: "https://via.placeholder.com/300x200.png?text=Nissan+Kenmeri" }
];

let cart = [];

function displayProducts(list) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
        <p class="price">${product.price}</p>
        <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterProducts(brand) {
  if (brand === "Tất cả") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.brand === brand));
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} (${item.brand}) <span>${item.price}</span>`;
    cartList.appendChild(li);
  });
}

// Hiển thị tất cả sản phẩm ban đầu
displayProducts(products);
