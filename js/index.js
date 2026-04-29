import { getProducts } from "./api.js";
import { createCard } from "./cards.js";
import {
  initLocalStorage,
  saveToLocalStorage,
  getFromLocalStorage,
  removeItemFromLocalStorage
} from "./storage.js";

let allProducts = [];

//elimina del carrito
window.removeFromCart = function(index) {
  removeItemFromLocalStorage(index);
  renderCart();
};

//main
async function init() {
  initLocalStorage();

  allProducts = await getProducts();

  renderProducts(allProducts);
  renderCart();
  initSearch();
  initCategoryFilter();
}

//render pantalla
function renderProducts(products) {
  const container = document.getElementById("products");

  container.innerHTML = products
    .map(product => createCard(product))
    .join("");

  addCartEvents(products);
}

//buscar por texto
function initSearch() {
  document.getElementById("search").addEventListener("input", (e) => {
    const text = e.target.value.toLowerCase();

    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(text)
    );

    renderProducts(filtered);
  });
}

//filtro por categoria
function initCategoryFilter() {
  document.getElementById("categoryFilter").addEventListener("change", (e) => {
    const category = e.target.value;

    if (category === "") {
      renderProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(product =>
      product.category === category
    );

    renderProducts(filtered);
  });
}
//agrega items al carrito
function addCartEvents(products) {
  products.forEach(product => {
    const btn = document.getElementById(`btn-${product.id}`);

    if (btn) {
      btn.addEventListener("click", () => {
        saveToLocalStorage(product);
        renderCart();
      });
    }
  });
}
//muestra carrito
function renderCart() {
  const cart = getFromLocalStorage();
  const container = document.getElementById("cartItems");

  container.innerHTML = cart.map((item, index) => `
    <div class="d-flex justify-content-between align-items-center border p-2 mb-2">
      <div>
        <strong>${item.title}</strong><br>
        $${item.price}
      </div>

      <button 
        class="btn btn-danger btn-sm"
        onclick="removeFromCart(${index})"
      >
        Eliminar
      </button>
    </div>
  `).join("");

  document.getElementById("cartCount").textContent = cart.length;
}

init();