const menuEmailDesktop = document.querySelector('.navbar-email');
const menuUserAccount = document.querySelector('.desktop-menu')
const menuMobile = document.querySelector('.mobile-menu');
const menuMobileBtn = document.querySelector('.menu');
const menuShopCart = document.querySelector('.navbar-shopping-cart');
const shopCartCointainer = document.querySelector('#shoppingCartContainer')
//variables de elementos deinformacion de producto



//Funcion principal para deshabilitar menus
const toggleClass = element => {
    if (!element) {
      console.log('El elemento no existe');
      return;
    }
    element.classList.toggle('inactive');
  };

//Interruptor del menu de carrito
menuShopCart.addEventListener('click', () => toggleClass(shopCartCointainer));

//Interruptor del menu de cuenta de usuario al darle click al email de usuario
menuEmailDesktop.addEventListener('click', () => toggleClass(menuUserAccount));

//Interruptor del menu en mobile
menuMobileBtn.addEventListener('click', () => toggleClass(menuMobile));

//Funcion para crear productos que es invocada desde products
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
    const getImgSrc = imgSrc => `/img/${imgSrc}`;
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

//A partir de aca, captura los datos de los elementos creados anteriormente
//para añadirlos a productInfoCard
const productInfoCard = document.querySelector('#productDetail');
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    //console.log(card)
    toggleClass(productInfoCard);
    showSelectedProduct(index);
  });
});

const showSelectedProduct = index => {
  //const productImage = document.querySelector('#product-detail-image');
  const productPrice = document.querySelector('#product-detail-price');
  const productName = document.querySelector('#product-detail-name');
  const productInfo = document.querySelector('#product-detail-info');

  const selectedImg = document.querySelector(`#product-card__image-${index}`);
  const selectedPrice = document.querySelector(`#product-card__price-${index}`);
  const selectedName = document.querySelector(`#product-card__name-${index}`);
  const selectedDescription = document.querySelector(`#product-card__description-${index}`);

  //productImage.src = selectedImg.src;
  productPrice.innerText = selectedPrice.innerText;
  productName.innerText = selectedName.innerText;
  productInfo.innerText = selectedDescription.innerText;
};