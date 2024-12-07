// Function to highlight the active link
function highlightLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav-link');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach((section, index) => {
      if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
        navLinks[index].classList.add('active'); // Add 'active' class to the link
      } else {
        navLinks[index].classList.remove('active'); // Remove 'active' class
      }
    });
  }
  
  // Function to highlight the active link on page load
  function highlightOnLoad() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav-link');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach((section, index) => {
      if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
        navLinks[index].classList.add('active'); // Add 'active' class to the link
      } else {
        navLinks[index].classList.remove('active'); // Remove 'active' class
      }
    });
  }
  
  // Click Event to Highlight Link
  document.querySelectorAll('.main-nav-link').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.main-nav-link').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  
  // Scroll Event to Update Active Link
  window.addEventListener('scroll', highlightLink);
  
  // Call on page load to check which section is in view
  document.addEventListener('DOMContentLoaded', highlightOnLoad);
  