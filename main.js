const desktopEmailMenu = document.querySelector('.navbar-email');
const desktopUserAccountMenu = document.querySelector('.desktop-menu')

const mobileMenu = document.querySelector('.mobile-menu');
const iconMenuMobile = document.querySelector('.menu');

const iconShoppingCart = document.querySelector('.icon-shopping-cart');
const menuShoppingCart = document.querySelector('.product-detail')

const disableMenu = element => {
    element ? element.classList.add('inactive') : console.log('El elemento no existe')
}
const enableMenu = element => {
    element ? element.classList.toggle('inactive') : console.log('El elemento no existe')
}
//Interruptor del menu de cuenta de usuario al darle click al email
const toggleDesktopUserAccountMenu = () => {
    disableMenu(menuShoppingCart);
    disableMenu(mobileMenu);
    enableMenu(desktopUserAccountMenu);
}
desktopEmailMenu.addEventListener('click', toggleDesktopUserAccountMenu);

//Interruptor del menu mobile
const toggleMenuMobile = () => {
    disableMenu(menuShoppingCart);
    enableMenu(mobileMenu)
}
iconMenuMobile.addEventListener('click', toggleMenuMobile)

//Interruptor del menu de carrito de compras
const toggleCartMenu = () => {
    disableMenu(mobileMenu);
    disableMenu(desktopUserAccountMenu)
    enableMenu(menuShoppingCart)
}
iconShoppingCart.addEventListener('click', toggleCartMenu)

const closeAllMenus = () => {
    disableMenu(desktopUserAccountMenu);
    disableMenu(mobileMenu);
    disableMenu(menuShoppingCart);
}
document.addEventListener('click', (event) => {
    if(event.target.classList.contains('menu')||event.target.classList.contains('navbar-email')||event.target.classList.contains('icon-shopping-cart')) return;
    closeAllMenus();
});