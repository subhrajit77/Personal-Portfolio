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
  
  // Function to handle animations when elements come into view
  // Function to handle animations when elements come into view
function handleAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create intersection observer instance for timeline
  const timelineObserver = new IntersectionObserver(handleAnimation, { threshold: 0.5 });
  
  // Observe the timeline items
  const timelineItems = document.querySelectorAll('.timeline .animate');
  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });




