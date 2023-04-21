function scrollTo(element) {
  window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
  })
}  
var button4 = document.querySelector('.scrollTo4');
var price = document.querySelector('#price');
button4.addEventListener('click' , () => {
  scrollTo(price);
});
document.getElementById('burgerMenu__btn-open').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.add('--show');
});
document.getElementById('burgerMenu__btn-hide').addEventListener('click', function(){
  document.getElementById('burgerMenu').classList.remove('--show');
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
