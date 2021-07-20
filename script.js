var header = document.getElementById("myNav");
var nav_links = header.getElementsByClassName("nav_link");
for (var i = 0; i < nav_links.length; i++){
  nav_links[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function functionToggle(){
  document.getElementById("dropdown_menu").classList.toggle("show");
}

//this code was brought in from w3schools in the learning phase. 
window.onclick = function(e){
  if (!e.target.matches('.drp')){
    console.log("here");//for debuggin purpose
    var myDropdown = document.getElementById("dropdown_menu");
    if (myDropdown.classList.contains('show')){
      myDropdown.classList.remove('show');
    }
  }
}


