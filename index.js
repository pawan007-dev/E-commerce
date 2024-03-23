var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"

  // Bring the "Shop Now" button to the front
  var shopNowButton = document.querySelector('.Header-button');
  if (shopNowButton) {
      shopNowButton.style.zIndex = '-1'; // Move the button behind the side navbar
  }

  // Move the "Add to Cart" buttons (Addtocart1) behind the side navbar
  var addToCartButtons1 = document.querySelectorAll('.Addtocart1');
  addToCartButtons1.forEach(function(button) {
      button.style.zIndex = '-1'; // Move the button behind the side navbar
  });

  // Move the "Add to Cart" buttons (Addtocart2) behind the side navbar
  var addToCartButtons2 = document.querySelectorAll('.Addtocart2');
  addToCartButtons2.forEach(function(button) {
      button.style.zIndex = '-1'; // Move the button behind the side navbar
  })
}

function closeNavbar(){

sidenav.style.left="-60%"
         
// Bring the "Shop Now" button back to the front after 0.5 seconds
setTimeout(function() {
    var shopNowButton = document.querySelector('.Header-button');
    if (shopNowButton) {
        shopNowButton.style.zIndex = '1'; // Move the button to the front
    }
}, 1500); // 1500 milliseconds = 1.5 seconds

// Bring the "Add to Cart" buttons (Addtocart1) back to the front after 2 seconds
setTimeout(function() {
    var addToCartButtons1 = document.querySelectorAll('.Addtocart1');
    addToCartButtons1.forEach(function(button) {
        button.style.zIndex = '1'; // Move the button to the front
    });
}, 1500); // 1500 milliseconds = 1.5 seconds

// Bring the "Add to Cart" buttons (Addtocart2) back to the front after 2 seconds
setTimeout(function() {
    var addToCartButtons2 = document.querySelectorAll('.Addtocart2');
    addToCartButtons2.forEach(function(button) {
        button.style.zIndex = '1'; // Move the button to the front
    });
}, 1500); // 1500 milliseconds = 1.5 seconds

}


