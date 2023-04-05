// Menu en Correo
const MenuEmail = document.querySelector(".email");
const desktopMenu = document.querySelector(".desktop-menu");

MenuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle("inactive");

}

// Menu en Mobile
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");

}

// Menu Carrito de compras o aside

const MenuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")

MenuCarritoIcon.addEventListener("click", toggleCarritoMenu);

function toggleCarritoMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    const isproductDetailShoppingClose = productDetailShopping.classList.contains("inactive");
    if(!isproductDetailShoppingClose){
        productDetailShopping.classList.add("inactive");
    }


    aside.classList.toggle("inactive");
}

// Open Product Detail Shoping
const productDetailShopping = document.querySelector(".product-Detail-Shopping");
function openProductDetailAside(){
    aside.classList.add("inactive");
    productDetailShopping.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
}


// Close Icon Product Detail Shoping
const productDetailCloseIcon = document.querySelector(".product-detail-close");
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function closeProductDetailAside(){
    productDetailShopping.classList.add("inactive");
}

// Codigo para Lista de Productos
const cardsContainer = document.querySelector(".cards-container");
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "TV",
    price: 400,
    image: "https://johnlewis.scene7.com/is/image/JohnLewis/tv-carousel3-070922"
})
productList.push({
    name: "Guitar",
    price: 600,
    image: "https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg"
})

function rederProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
     
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
    
}

rederProducts(productList);