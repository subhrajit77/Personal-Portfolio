// text animation
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Graphic Designer','Software Developer'],
    typeSpeed: 50,
});

// Timeline animation
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // JavaScript to add animation class to experience section elements
  document.addEventListener('DOMContentLoaded', function() {
    const expItems = document.querySelectorAll('.workexp li');

    function fadeInItems() {
      expItems.forEach((item, index) => {
        setTimeout(() => {
          const date = item.querySelector('.date');
          const title = item.querySelector('.title');
          const descr = item.querySelector('.descr');
          if (date) date.style.opacity = 1;
          if (title) title.style.opacity = 1;
          if (descr) descr.style.opacity = 1;
        }, index * 200); // Adjust timing as needed
      });
    }

    fadeInItems();
  });

  




