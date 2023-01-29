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

const createCard = (productName, productPrice, imgSrc, productIndex, description) => {
    const mainCardsContainer = document.querySelector(".cards-container");

    //Contenedor principal, el productIndex se obtiene al crear un producto nuevo, el
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute('class', 'product-card');
    cardContainer.setAttribute('id', `product-card-${productIndex}`);
    mainCardsContainer.append(cardContainer)

    //Crea el elemento de producto de imagen
    // el src de la img se obtiene del parametro de la funcion principal (imgSrc)
    const cardImg = document.createElement('img');
    const getImgSrc = imgSrc => `./img/${imgSrc}`;
    cardImg.src = getImgSrc(imgSrc)
    cardImg.setAttribute('id', `product-card__image-${productIndex}`);
    cardContainer.append(cardImg)

    //Crea el contenedor del nombre e imagen del producto a (class="product-card")
    const productInfo = document.createElement("div");
    productInfo.setAttribute('class', 'product-info')
    cardContainer.append(productInfo)

    //Contenedor de los elementos nombre y precio del producto
    const createDiv = document.createElement("div");
    productInfo.append(createDiv);

    const descriptionContainer = document.createElement('p')
        descriptionContainer.setAttribute('id', `product-card__description-${productIndex}`)
        descriptionContainer.innerText = description;
        descriptionContainer.classList.add('inactive')
        productInfo.append(descriptionContainer)

    //Crea el elemento del PRECIO del producto
    //se obtiene del parametro de la funcion principal (productPrice)
    const productPriceContainer = document.createElement('p');
    productPriceContainer.setAttribute('id', `product-card__price-${productIndex}`);
    productPriceContainer.innerText = productPrice;

    //Crea el elemento del NOMBRE del producto
    //se obtiene del parametro de la funcion principal (productName)
    const productNameContainer = document.createElement('p')
    productNameContainer.innerText = productName
    productNameContainer.setAttribute('id', `product-card__name-${productIndex}`);

    createDiv.append(productPriceContainer, productNameContainer)

    //Boton "Add to Cart"
    const figureContainer = document.createElement('figure');
    productInfo.append(figureContainer);
    const btnAddCart = document.createElement('img')
    btnAddCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    figureContainer.append(btnAddCart)
} 

//Aqui donde creamos todos los articulos
const products = [
    {   
        name: "Globo Terraqueo", 
        price: "$350", 
        img: "globo.jpeg", 
        description: "Explora el mundo en tu hogar o lugar de trabajo. Una herramienta divertida y educativa para todas las edades."
    },
    {
        name: "Tablero de Ajedrez", 
        price: "$420", 
        img: "ajedrez.jpeg", 
        description: "Elegante, duradero y perfecto para jugar y decorar tu espacio. Mejora tus habilidades y desafía a tus oponentes."
    },
    {
        name: "Conejo de Peluche", 
        price: "$40", img: "peluche.jpeg", 
        description: "Un conejo de peluche rosado y suave. Ideal para dormir y jugar. Un compañero perfecto para cualquier lugar."
    },
    {
        name: "Telefono Vintage", 
        price: "$65", 
        img: "telefono.jpeg", 
        description: "Una adición única a cualquier hogar. Su diseño retro y color rosa que le da un toque especial a cualquier ambiente."
    },
]

//Esta funcion se encarga de agregarle el indice a los ID de los productos
products.forEach((product, index) => {
    createCard(product.name, product.price, product.img, index, product.description);
});

const productInfoCard = document.querySelector("#productDetailContainer")

const productInfo = document.querySelectorAll(".product-card");
productInfo.forEach( (element, index)=> {
  element.addEventListener('click', event => { 
    console.log(event.target)
    enableMenu(productInfoCard)
    showSelectedProduct(index)
  });
});



const showSelectedProduct = index => {
    const productDetailImage = document.querySelector("#product-detail-image");
    const productDetailPrice = document.querySelector("#product-detail-price");
    const productDetailName = document.querySelector("#product-detail-name");
    const productDetailInfo = document.querySelector("#product-detail-info");

    const imgSelected = document.querySelector(`#product-card__image-${index}`);
    const priceSelected = document.querySelector(`#product-card__price-${index}`);
    const nameSelected = document.querySelector(`#product-card__name-${index}`);
    const descriptionSelected = document.querySelector(`#product-card__description-${index}`)

    productDetailImage.src = imgSelected.src;
    productDetailPrice.innerText = priceSelected.innerText;
    productDetailName.innerText = nameSelected.innerText;
    productDetailInfo.innerText = descriptionSelected.innerText;
}