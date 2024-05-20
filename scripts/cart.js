function getCartFromLocalStorage() {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }
  
  
  function displayCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cart = getCartFromLocalStorage();
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = "";
  
    
    cart.forEach((product, index) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Ta bort";
      removeButton.dataset.index = index; 
      removeButton.addEventListener("click", function() {
        const indexToRemove = parseInt(this.dataset.index); 
        removeFromCart(indexToRemove);
        displayCartItems(); 
        });
        productDiv.appendChild(removeButton);

      const productName = document.createElement("h3");
      productName.textContent = product.name;
      productDiv.appendChild(productName);
  
      
  
      const productPrice = document.createElement("p");
      productPrice.textContent = "$" + product.price;
      productDiv.appendChild(productPrice);
  
        totalPrice += parseFloat(product.price);

      
        
      
  
      cartItemsContainer.appendChild(productDiv);
      const totalPriceLabel = document.getElementById("total");
        totalPriceLabel.textContent = "Summa Totalt: " + totalPrice + " Kr"
    });
  }
  function updateCartCounter() {
    const cartCounter = document.getElementById("cart-counter");
    let cart = getCartFromLocalStorage();
    cartCounter.textContent = cart.length;
    if (cart.length == 0) {
        const totalPriceLabel = document.getElementById("total");
        totalPriceLabel.textContent = "Summa Totalt: 0 Kr";
    }
    
  }
  

  function removeFromCart(index) {
    
    let cart = getCartFromLocalStorage();
    
    
    if (index >= 0 && index < cart.length) {
      
      cart.splice(index, 1);
      
      
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCounter();
    }
  }

  
  const buyButton = document.getElementById("buyButton");
  buyButton.addEventListener("click", function(){
    openPopupWindow();
  })

  function openPopupWindow(){
      document.getElementById("popup").style.display = "block";
      localStorage.removeItem("cart");
      displayCartItems();
      updateCartCounter();
  }

  document.getElementById("close-popup-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });

  
  
  window.addEventListener("load", displayCartItems);
  window.addEventListener("load", updateCartCounter);