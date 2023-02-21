/*const navList = document.getElementById("navBar");

window.onscroll = function(){
  if(document.body.scrollTop < 0 || document.documentElement.scrollTop > 5){
    navBar.classList.add("headTransparent");
    navBar.classList.remove("head");
  }else{
    navBar.classList.add("head");
    navBar.classList.remove("headTransparent");    
  }
}

function displayFunction() {
  const p = document.getElementById('search-bar');

  p.innerHTML = `<input class="form-control me-2 search" type="search" placeholder="Search for artist, event or venue" aria-label="Search">`;
}*/

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("headTransparent");
  } else {
    header.classList.remove("headTransparent");
  }
}
