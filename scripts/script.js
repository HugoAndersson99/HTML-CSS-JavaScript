class Product {
    constructor(price, name, description, image) {
        this.price = price;
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

let cart = [];

const takfärg = new Product("1000kr", "Lady Perfection", "Lady Perfection ger ditt tak ett mycket vackert, helmatt utseende och är enkel att måla med utan att det stänker.", "images/takfärg.jpeg");
const väggfärg = new Product("1600kr", "Lady Balance", "ger dig vackra matta väggar och är det bästa valet för dig som är i behov av en bra inomhusmiljö.", "images/wonderwall.jpeg");
const golvfärg = new Product("1400kr", "Studio Golvfärg", " Studio Golvfärg är en inomhusfärg för målning av trägolv.", "images/StudioGolv.jpeg");
const fasadfärg = new Product("2500kr", "Demidekk Ultimate", "Demidekk Ultimate är en vacker och robust täckfärg för fasader. Den ger ditt hus ett perfekt skydd och håller glans och kulör år efter år.", "images/demidekk.jpeg");
const grundfärg = new Product("1900kr", "Alcro Grundfärg", "Alcro Grundfärg Utomhus är en färg för grundmålning av trä utomhus, som fönster och fasader.", "images/grundfärg.jpeg");
const fönsterfärg = new Product("1200kr", "Demidekk Details", "Jotun Demidekk Infinity Details används för målning av fönster och snickeridetaljer utomhus.", "images/fönsterfärg.jpeg");

function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
  
    const image = document.createElement("img");
    image.src = product.image;
    
    productDiv.appendChild(image);
  
    const title = document.createElement("h3");
    title.textContent = product.name;
    productDiv.appendChild(title);
  
    const description = document.createElement("p");
    description.textContent = product.description;
    productDiv.appendChild(description);

    const price = document.createElement("h2");
    price.textContent = product.price;
    productDiv.appendChild(price);
  
    const button = document.createElement("button");
    button.textContent = "Lägg i Kundvagn";
    button.addEventListener("click", function(){
      addToCart(product);
      
      
    });
    productDiv.appendChild(button);
  
    return productDiv;
  }

  function displayProducts(...products) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = createProductElement(product);
      productContainer.appendChild(productElement);
    });
  }
  function displayCart(product){
    const itemContainer = document.querySelector(".cart-items");
    itemContainer.innerHTML = '';
    
    const itemElement = createCartElement(product);
    itemContainer.appendChild(itemElement);
  }
  function generateCart(){
    cart.forEach(product => {
      displayCart(product);
    });
  }
  
  

  const inomhusButton = document.getElementById('inomhusButton');
  const utomhusButton = document.getElementById('utomhusButton');

  inomhusButton.addEventListener('click', generateInsideProducts);
  utomhusButton.addEventListener('click', generateOutsideProducts);

  const cartButton = document.getElementsByClassName('cart-icon');

  cartButton.addEventListener('click', generateCart);

  function generateInsideProducts(){
    displayProducts(väggfärg, golvfärg, takfärg);
  }
  function generateOutsideProducts(){
    displayProducts(fasadfärg, grundfärg, fönsterfärg);
  }

  function addToCart(product){
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
  }
  
  

  function createCartElement(product){
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const title = document.createElement("h3");
    title.textContent = product.name;
    productDiv.appendChild(title);

    const price = document.createElement("h2");
    price.textContent = product.price;
    productDiv.appendChild(price);

    return productDiv;
  }
  
  function updateCartCounter() {
    const cartCounter = document.getElementById("cart-counter");
    let cart = getCartFromLocalStorage();
    cartCounter.textContent = cart.length;
  }
  function getCartFromLocalStorage() {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }
  

 
  
  

  

  
  
  