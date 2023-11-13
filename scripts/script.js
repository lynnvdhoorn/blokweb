console.log("hi");

var eersteStreepjesButton = document.querySelector("button");
var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");

menuButton.addEventListener("click", function() {
  deNav.classList.toggle("open");

  if (eersteStreepjesButton.getAttribute("aria-expanded") === "false") {
    eersteStreepjesButton.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  } else {
    eersteStreepjesButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});


// bron: https://codepen.io/3lv3n_snip3r/pen/KdXKYW
document.addEventListener("DOMContentLoaded", function() {
  var searchIcon = document.querySelector("nav i");
  var searchForm = document.querySelector("nav form");

  searchIcon.addEventListener("click", function(e) {
    e.stopPropagation();
    searchForm.style.display = "block";
    searchIcon.style.display = "none";
    searchForm.querySelector("input").focus();
    document.body.classList.add("menu-open");
  });

  document.addEventListener("click", function() {
    searchForm.style.display = "none";
    searchIcon.style.display = "block";
    document.body.classList.remove("menu-open");
  });

  searchForm.querySelector("input").addEventListener("click", function(e) {
    e.stopPropagation();
  });
});
