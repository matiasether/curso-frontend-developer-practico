const desktopEmailMenu = document.querySelector('.navbar-email');
const desktopUserAccountMenu = document.querySelector('.desktop-menu')

const mobileMenu = document.querySelector('.mobile-menu');
const iconMenuMobile = document.querySelector('.menu');

//Muestra/quita el menu de cuenta de usuario al darle click al email
const toggleDesktopUserAccountMenu = () => {
    desktopUserAccountMenu.classList.toggle('inactive')
}
desktopEmailMenu.addEventListener('click', toggleDesktopUserAccountMenu);


//Muestra/quita el menu mobile al darle click
const toggleMenuMobile = () => {
    mobileMenu.classList.toggle('inactive')
}
iconMenuMobile.addEventListener('click', toggleMenuMobile)