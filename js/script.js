// Add custom JavaScript here
function userScroll() { // To have the navbar a dark background when scroll on the y axis is > 50px
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');  // To add the dark bg
        navbar.classList.add('navbar-sticky');  // To have the dark bg a bit transparent and have a shaddow - see in styles.scss
      } else {  // On the top of the page (without scrolling)
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-sticky');
      }
    });
}
  
document.addEventListener('DOMContentLoaded', userScroll);