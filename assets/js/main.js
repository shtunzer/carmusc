var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;}

  function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var button1 = document.querySelector('.scrollTo1');
var button2 = document.querySelector('.scrollTo2');
var button3 = document.querySelector('.scrollTo3');
var button4 = document.querySelector('.scrollTo4');
var button5 = document.querySelector('.scrollTo5');
var button6 = document.querySelector('.scrollTo6');
var button7 = document.querySelector('.scrollTo7');
var button8 = document.querySelector('.scrollTo8');
var button9 = document.querySelector('.scrollTo9');


var advantages1 = document.querySelector('#advantages1');
var advantages2 = document.querySelector('#advantages2');
var works = document.querySelector('#works');
var price = document.querySelector('#price');

button1.addEventListener('click' , () => {
  scrollTo(advantages1);
});
button2.addEventListener('click' , () => {
  scrollTo(advantages2);
});
button3.addEventListener('click' , () => {
  scrollTo(works);
});
button5.addEventListener('click' , () => {
  scrollTo(advantages1);
});
button6.addEventListener('click' , () => {
  scrollTo(advantages2);
});
button7.addEventListener('click' , () => {
  scrollTo(advantages1);
});
button8.addEventListener('click' , () => {
  scrollTo(advantages2);
});
button9.addEventListener('click' , () => {
  scrollTo(works);
});


const swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
