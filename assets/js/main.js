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
var button5 = document.querySelector('.scrollTo5');
var button6 = document.querySelector('.scrollTo6');
var button7 = document.querySelector('.scrollTo7');
var button8 = document.querySelector('.scrollTo8');
var button9 = document.querySelector('.scrollTo9');
var button10 = document.querySelector('.scrollTo10');
var button11 = document.querySelector('.scrollTo11');
var button12 = document.querySelector('.scrollTo12');

var advantages1 = document.querySelector('#advantages1');
var advantages2 = document.querySelector('#advantages2');
var works = document.querySelector('#works');

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
button10.addEventListener('click' , () => {
  scrollTo(advantages1);
});
button11.addEventListener('click' , () => {
  scrollTo(advantages2);
});
button12.addEventListener('click' , () => {
  scrollTo(works);
});

document.getElementById('burgerMenu__btn-open').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.add('--show');
});
document.getElementById('burgerMenu__btn-hide').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.remove('--show');
});
document.querySelector('.scrollTo10').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.remove('--show');
});
document.querySelector('.scrollTo11').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.remove('--show');
});
document.querySelector('.scrollTo12').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.remove('--show');
});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      1430: {
        slidesPerView: 3
      },
      1040: {
        slidesPerView: 2
      }
  }
});

const advantages__swiper_1 = new Swiper(".advantages__swiperBlock_1", {
  navigation: {
      nextEl: ".advantages__swiper-button-next_1",
      prevEl: ".advantages__swiper-button-prev_1",
  },
});

document.querySelector('.advantages__swiper-button-next_1').addEventListener('click', function(){
  document.querySelector('.advantages__swiper-button-prev_1').classList.remove('--opacity-btn');
  document.querySelector('.advantages__swiper-button-next_1').classList.add('--opacity-btn');
});

document.querySelector('.advantages__swiper-button-prev_1').addEventListener('click', function(){
  document.querySelector('.advantages__swiper-button-next_1').classList.remove('--opacity-btn');
  document.querySelector('.advantages__swiper-button-prev_1').classList.add('--opacity-btn');
});

const advantages__swiper_2 = new Swiper(".advantages__swiperBlock_1", {
  navigation: {
      nextEl: ".advantages__swiper-button-next_2",
      prevEl: ".advantages__swiper-button-prev_2",
  },
});

document.querySelector('.advantages__swiper-button-next_2').addEventListener('click', function(){
  document.querySelector('.advantages__swiper-button-prev_2').classList.remove('--opacity-btn');
  document.querySelector('.advantages__swiper-button-next_2').classList.add('--opacity-btn');
});

document.querySelector('.advantages__swiper-button-prev_2').addEventListener('click', function(){
  document.querySelector('.advantages__swiper-button-next_2').classList.remove('--opacity-btn');
  document.querySelector('.advantages__swiper-button-prev_2').classList.add('--opacity-btn');
});
