// filtra productos por categoría seleccionada
function filterByCategory(category) {
  const filtered = products.filter(p => p.category === category);
  renderProducts(filtered);
}