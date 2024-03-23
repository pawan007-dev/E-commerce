var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"

    // Move the "Add to Cart" buttons (Addtocart) behind the side navbar
  var addToCartButtons = document.querySelectorAll('.Addtocart');
  addToCartButtons.forEach(function(button) {
      button.style.zIndex = '-1'; // Move the button behind the side navbar
  });
}

function closeNavbar()
{
    sidenav.style.left="-60%"

    // Bring the "Add to Cart" buttons (Addtocart) back to the front after 2 seconds
setTimeout(function() {
    var addToCartButtons = document.querySelectorAll('.Addtocart');
    addToCartButtons.forEach(function(button) {
        button.style.zIndex = '1'; // Move the button to the front
    });
}, 1500); // 1500 milliseconds = 1.5 seconds
}


