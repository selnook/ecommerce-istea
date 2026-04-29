export function createCard(product) {
    return `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5>${product.title}</h5>
            <p>$${product.price}</p>
            <button class="btn btn-dark" id="btn-${product.id}">
              Comprar
            </button>
          </div>
        </div>
      </div>
    `;
  }