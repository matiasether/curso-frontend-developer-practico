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
//Interruptor del menu de cuenta de usuario al darle click al email de usuario
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
//Funcion principal creador de los productos en el DOM
const createCard = (productName, productPrice, imgSrc ) => {
    const mainCardsContainer = document.querySelector(".cards-container")

    //Contenedor principal de la tarjeta del producto
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute('class', 'product-card')
    mainCardsContainer.append(cardContainer)

        //Crea el elemento de producto de imagen
        // el src de la img se obtiene del parametro de la funcion principal (imgSrc)
        const cardImg = document.createElement('img');
        const getImgSrc = imgSrc => `./img/${imgSrc}`;
        cardImg.src = getImgSrc(imgSrc)
        cardContainer.append(cardImg)

        //Crea el contenedor del nombre e imagen del producto a (class="product-card")
        const productInfo = document.createElement("div");
        productInfo.setAttribute('class', 'product-info')
        cardContainer.append(productInfo)

            //Contenedor de los elementos nombre y precio del producto
            const createDiv = document.createElement("div");
            productInfo.append(createDiv);

                //Crea el elemento del PRECIO del producto
                //se obtiene del parametro de la funcion principal (productPrice)
                const productPriceContainer = document.createElement('p');
                productPriceContainer.innerText = productPrice;

                //Crea el elemento del NOMBRE del producto
                //se obtiene del parametro de la funcion principal (productName)
                const productNameContainer = document.createElement('p')
                productNameContainer.innerText = productName

                createDiv.append(productPriceContainer, productNameContainer)
            
            //Crea el boton "Add to Cart" y lo agrega a su nodo padre (class="product-info").
            const figureContainer = document.createElement('figure');
            productInfo.append(figureContainer);
                const btnAddCart = document.createElement('img')
                btnAddCart.setAttribute('src', './icons/bt_add_to_cart.svg')
                figureContainer.append(btnAddCart)
} 

const products = [
    {name: "Globo Terraqueo", price: "$350", img: "globo.jpeg"},
    {name: "Tablero de Ajedrez", price: "$420", img: "ajedrez.jpeg"},
    {name: "Conejo de Peluche", price: "$40", img: "peluche.jpeg"},
    {name: "Telefono Vintage", price: "$65", img: "telefono.jpeg"},
]
products.forEach(product => createCard(product.name, product.price, product.img))