// Función para verificar si el elemento es visible en la ventana

function handlerScroll() {
    const header = document.querySelector('.header')
    
    window.addEventListener('scroll', function () {
        header.classList.toggle('show--scroll', window.scrollY > 0)
        
    })

}

export default handlerScroll
