function showCart() {
    const btnCart = document.querySelector('.btn--cart')
    const cart = document.querySelector('.cart')
    const main = document.querySelector('.main')
   const footer = document.querySelector('.footer')

btnCart.addEventListener('click', function(){
    cart.classList.toggle('show--cart')
})

btnCart.addEventListener('click', function(){
    main.classList.toggle('show--main')
})

btnCart.addEventListener('click', function(){
    footer.classList.toggle('show--footer')
})

cart.addEventListener('click', function (e) {
    if (e.target.closest('.btn--close')) {
          cart.classList.remove('show--cart')
        }
    if(e.target.closest('.btn--close')) {
        main.classList.remove('show--main')
    }
    if (e.target.closest('.btn--close')) {
        footer.classList.remove('show--footer')
    }
})

}

export default showCart