const navList = document.getElementById("navBar");

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
}