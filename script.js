// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`; 
    productList.appendChild(li);
	
});
  });
}

// Render cart list
function renderCart() {
	let cart = JSON.parse(sessionStorage.getItem("key")) || [];
	let cartList = document.getElementById("cart-list");
	cartList.innerHTML='';
	cart.forEach((product)=>{
		const li=document.createElement('li');
		  
    li.innerHTML = `
      ${product.name} - $${product.price}`;
		cartList.appendChild(li);
    })
	 
	
}

// Add item to cart
function addToCart(productId) {
	let product=products.filter((item)=>(item.id===productId));
	let cart = JSON.parse(sessionStorage.getItem("key")) || [];
	cart.push(product);
	   sessionStorage.setItem('key',JSON.stringify(cart));
}

// Remove item from cart
function removeFromCart(productId) {
	let product=JSON.parse(sessionStorage.getItem('key'))
	let filterproduct=product.filter((item)=>item.id!==productId)
	  sessionStorage('key',JSON.stringyfy(filterproduct))
}

// Clear cart
function clearCart() {
	 sessionStorage.setItem("key", JSON.stringify([]));

}

// Initial render
renderProducts();
renderCart();
