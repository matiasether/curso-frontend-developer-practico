const desktopEmailMenu = document.querySelector('.navbar-email');
const desktopUserAccountMenu = document.querySelector('.desktop-menu')

const toggleDesktopUserAccountMenu = () => {
    desktopUserAccountMenu.classList.toggle('inactive')
}

desktopEmailMenu.addEventListener('click', toggleDesktopUserAccountMenu);