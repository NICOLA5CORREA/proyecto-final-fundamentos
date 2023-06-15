import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';

/* UI Elements */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)

/* ======= light and dark mode ======== */

let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");
let mode = "light";
let container1 = document.querySelector(".container1");

function lightMode () {
    button.className = "switch";
    container1.className = "container1";
    circle.className = "circle";
}

function darkMode () {
    button.className = "darkButton";
    container1.className = "darkContainer1";
    circle.className = "darkCircle";
}

circle.addEventListener ("click", () => {  
    if (mode === "light") {
        darkMode();
        mode = "dark";
    }
    else {
        lightMode();
        mode = "light";
    }
})