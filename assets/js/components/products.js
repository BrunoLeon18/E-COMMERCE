function products(products) {
    const db = [...products]

    function printProducts() {
        const productsContainer = document.querySelector('.products__container')
       let htmlProducts = ''

       for (const product of db) {
        htmlProducts += `
        <article class="product">
              <div class="product__image">
                <img
                  src="${product.image}"
                  alt="${product.name}"
                />
              </div>
              <div class="product__content">
                <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                <i class="bx bx-cart-add"></i>
                </button>
                <button type="button" class="modal__btn open--modal" data-id="${product.id}">
                <i class='bx bx-show'></i>
                </button>
                <span class="product__price">$${product.price}</span>
                <span class="product__stock">Disponibles: ${product.quantity}</span>
                <h3 class="product__title">
                  ${product.name}
                </h3>
              </div>
            </article>
        `
       }

       productsContainer.innerHTML = htmlProducts
    }

    printProducts()

    return { 
        db,
        printProducts
    }
}


export default products