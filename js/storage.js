const STORAGE_KEY = "cart";

//inicializa el carrito en localStorage
export function initLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}

//obtiene el carrito
export function getFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

//guarda un producto
export function saveToLocalStorage(item) {
  let cart = getFromLocalStorage();
  cart.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

//elimina un producto
export function removeItemFromLocalStorage(index) {
  let cart = getFromLocalStorage();
  cart.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}