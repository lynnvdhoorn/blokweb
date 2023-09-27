// JavaScript Document
console.log("hi");

  //const toggle = document.getElementById('toggle');
 // const body = document.getElementById('page-body');

//  toggle.addEventListener('change', function () {
 //   if (toggle.checked) {
      // Als de checkbox is aangevinkt (menu wordt geopend), verberg de overflow van de body
 //    body.style.overflow = 'hidden';
 //   } else {
      // Als de checkbox niet is aangevinkt (menu wordt gesloten), herstel de overflow van de body
 //    body.style.overflow = 'auto';
 //   }
 // });


const toggle = document.getElementById('toggle');
const body = document.getElementById('page-body');

toggle.addEventListener('change', function () {
  const content = document.querySelector('.content');

  if (toggle.checked) {
    // Als de checkbox is aangevinkt (menu wordt geopend), verberg de rest van de inhoud
    content.style.display = 'none';
    body.style.overflow = 'hidden'; // Optioneel: verberg de overflow van de body
  } else {
    // Als de checkbox niet is aangevinkt (menu wordt gesloten), toon de rest van de inhoud
    content.style.display = 'block';
    body.style.overflow = 'auto'; // Optioneel: herstel de overflow van de body
  }
});

