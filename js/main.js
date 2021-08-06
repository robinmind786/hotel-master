// Search-box
let inputBox = document.querySelector('.input-box');
let openSearch = document.querySelector('.fa-search');
openSearch.addEventListener('click', function(){
  inputBox.classList.toggle('showInput')
  if(inputBox.classList.contains('showInput')) {
    openSearch.classList.replace('fa-search', 'fa-remove');
  } else {
    openSearch.classList.replace('fa-remove', 'fa-search');
  }
});
// Navbar
var navLinks = document.querySelector('.nav-links');
var openNav = document.querySelector('.burger');
var faBars = document.querySelector('.fa-bars');
openNav.addEventListener('click', function(){
  navLinks.classList.toggle('showNav');
  if(navLinks.classList.contains('showNav')) {
    faBars.classList.replace('fa-bars', 'fa-remove');
    openNav.style.right = '90%';
  } else {
    faBars.classList.replace('fa-remove', 'fa-bars');
    openNav.style.right = '2rem';
  }
});

// Sticky Navbar
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById('myNav').style.position = 'fixed';
//     document.getElementById('myNav').style.top = '0';
//   } else {
//     document.getElementById('myNav').style.position = null;
//     document.getElementById('myNav').style.top = null;
//   }
// }


// Slider
var currentItem = 1;
showSlides(currentItem);
showSlides();

function plusSlide(n) {
  showSlides(currentItem += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if(n > slides.length) {
    currentItem = 1;
  }
  if(n < 1) {
    currentItem = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  currentItem++;
  if(currentItem > slides.length) {
    currentItem = 1;
  }
  slides[currentItem-1].style.display = 'block';
  setTimeout(showSlides, 5000);
}