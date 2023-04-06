const miBar = document.querySelector('.mi__bar');
const miManu = document.querySelector('.mi__manu');

miBar.addEventListener('click', function() {
  miManu.classList.toggle('open__menu');
});