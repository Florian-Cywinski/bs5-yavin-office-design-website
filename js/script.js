// Add custom JavaScript here
function userScroll() { // To have the navbar a dark background when scroll on the y axis is > 50px
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.querySelector('#to-top');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-sticky');  // To have a light bg which is a bit transparent and have a shaddow - see in styles.scss
      } else {  // On the top of the page (without scrolling)
        navbar.classList.remove('navbar-sticky');
      }
    });
}
  
function incrementStats() {
  const counters = document.querySelectorAll('.counter'); // To get all counter elements into an array like node list

  counters.forEach((counter) => {
    counter.innerText = 0;  // To initially clear the state

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');  // + to covert the string into a number
      const c = +counter.innerText;

      const increment = target / 200; // Increment steps

      if (c < target) { // Counts up as long c below the target
        counter.innerText = Math.ceil(c + increment); // To have the inner text the sum of the c value and the increment (ceil rounds the resulting number up)
        setTimeout(updateCounter, 1); // To run the function recusivelly and wait 1 ms
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);