const Hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector('nav');
const Line = document.querySelectorAll('.line')

const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


Hamburger.addEventListener("click", function () {
    Nav.classList.toggle("show-links");
   
    
});

console.log(Line)



