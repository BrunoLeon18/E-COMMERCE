function showModal(db) {

const productsDom = document.querySelector('.products__container')    
const modal = document.querySelector('.modal')



function modalPrint(id){
  let htmlModal = '';

   
    const product = db.find(p => p.id === id)
    htmlModal += `
            <div class="modal__container">
            <div class="modal__img">
              <img src="${product.image}" >
              <button type="button" class="modal__close btn--modal--close" data-id="${id}">
              <i class="bx bx-x"></i>
              </button>
            </div>
            <div class="modal__content">
              <div class="modal__head">
                <h2 class="modal__title">${product.name}</h2>
                <span class="modal__quantity">Disponible: ${product.quantity}</span>
                <span class="modal__price">$${product.price}</span>
              </div>
              <div class="modal__details">
                <p class="modal__paragraph">
                  ${product.description}
                </p>
              </div>
            </div>
          </div>
    `
  

  modal.innerHTML = htmlModal
}

/*Eventos*/

productsDom.addEventListener('click', (e) =>{
    if (e.target.closest('.open--modal')) {
      const id = +e.target.closest('.open--modal').dataset.id
      modal.classList.add('modal--show')
      modalPrint(id)
    }
})

modal.addEventListener('click', function (e) {
  if (e.target.closest('.btn--modal--close')) {
        modal.classList.remove('modal--show')
      }
})
 
}

export default showModal