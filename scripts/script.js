// JavaScript Document
console.log("hi");


 var eersteStreepjesButton = document.querySelector("button");
 var menuButton = document.querySelector("header button");
 var deNav = document.querySelector("header nav");
 
 menuButton.addEventListener("click", function() {
   deNav.classList.toggle("open");
 
   // Toggle de aria-expanded attribuutwaarde van de button
   if (eersteStreepjesButton.getAttribute("aria-expanded") === "false") {
     eersteStreepjesButton.setAttribute("aria-expanded", "true");
     document.body.style.overflow = "hidden";
   } else {
     eersteStreepjesButton.setAttribute("aria-expanded", "false");
     document.body.style.overflow = "";
   }
 });