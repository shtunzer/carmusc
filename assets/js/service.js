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