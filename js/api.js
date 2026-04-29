//obtiene productos de la api
export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
}

//obtiene las categorias
export async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  return await response.json();
}