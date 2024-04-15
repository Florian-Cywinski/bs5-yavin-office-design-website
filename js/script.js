// Add custom JavaScript here
function userScroll() { // To have the navbar a dark background when scroll on the y axis is > 50px
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.querySelector('#to-top');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-sticky');  // To have a light bg which is a bit transparent and have a shaddow - see in styles.scss
        toTopBtn.classList.add('show'); /* To make the to-top-button visible when the page is not on the top */
      } else {  // On the top of the page (without scrolling)
        navbar.classList.remove('navbar-sticky');
        toTopBtn.classList.remove('show');  /* To make the to-top-button invisible when the page is on the top */
      }
    });
}

function scrollToTop() {  /* To make the to-top-button (in)visible when the page is (not) on the top */
  document.body.scrollTop = 0;  // This is for the Safari browser
  document.documentElement.scrollTop = 0; // This is for the Chrome, FF and IE browser
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
document.querySelector('#to-top').addEventListener('click', scrollToTop);