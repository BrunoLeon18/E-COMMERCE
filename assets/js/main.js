import cart from './components/cart.js';
import darkMode from './components/dark-mode.js';
import loader from './components/loader.js';
import products from './components/products.js';
import handlerScroll from './components/scroll.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import showModal from './components/showModal.js';
import getProducts from './helpers/getProducts.js';


/* UI Eements */

/* Hidden loader*/
loader()

/* ShowMenu */
showMenu()

/* ShowCart */
showCart()


/* Products */

const { db, printProducts } = products(await getProducts())


/* Cart */
cart(db, printProducts)

/*Modal*/
showModal(db)

/* Dark-Mode*/ 
darkMode()

/* scroll */
handlerScroll()





