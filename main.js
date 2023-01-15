const desktopEmailMenu = document.querySelector('.navbar-email');
const desktopUserAccountMenu = document.querySelector('.desktop-menu')

const mobileMenu = document.querySelector('.mobile-menu');
const iconMenuMobile = document.querySelector('.iconMenuMobile');

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

//Cierra todos los menus abiertos en el display al hacer click en cualquier lugar
const closeAllMenus = () => {
    disableMenu(desktopUserAccountMenu);
    disableMenu(mobileMenu);
    disableMenu(menuShoppingCart);
}
document.addEventListener('click', (event) => {
    if( event.target.classList.contains('iconMenuMobile')
        || event.target.classList.contains('navbar-email')
        || event.target.classList.contains('icon-shopping-cart')) 
    return; 
    closeAllMenus();
});
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/
const createCard = (productName, productPrice, imgSrc ) => {
    const mainCardsContainer = document.querySelector(".cards-container")

    //Contenedor principal de la tarjeta del producto
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute('class', 'product-card')
    mainCardsContainer.append(cardContainer)

        //Imagen del producto
        const cardImg = document.createElement('img');
        cardImg.src = imgSrc
        cardContainer.append(cardImg)

        //Contenedor del producto
        const productInfo = document.createElement("div");
        productInfo.setAttribute('class', 'product-info')
        cardContainer.append(productInfo)

            //Contenedor de nombre y precio del producto
            const createDiv = document.createElement("div");
            productInfo.append(createDiv);

                //Precio del producto
                const productPriceContainer = document.createElement('p');
                productPriceContainer.innerText = productPrice;

                //Nombre del producto
                const productNameContainer = document.createElement('p')
                productNameContainer.innerText = productName

                createDiv.append(productPriceContainer, productNameContainer)
            
            //Container del botón Add to Cart
            const figureContainer = document.createElement('figure');
            productInfo.append(figureContainer);
                const btnAddCart = document.createElement('img')
                btnAddCart.setAttribute('src', './icons/bt_add_to_cart.svg')
                figureContainer.append(btnAddCart)
} 

createCard("Globo Terraqueo", "$350" ,"https://images.pexels.com/photos/1236421/pexels-photo-1236421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
createCard("Tablero de Ajedrez", "$420", "https://images.pexels.com/photos/4973821/pexels-photo-4973821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
createCard("Conejo de peluche", "$40" ,"https://images.pexels.com/photos/6156899/pexels-photo-6156899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
createCard("Telefono vintage", "$65", "https://images.pexels.com/photos/10605229/pexels-photo-10605229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")