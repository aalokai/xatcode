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
  




// // Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     // e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#" || href === "#home"){
//       e.preventDefault();
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//     // Scroll to other links
//     if (href !== "#" && href !== "#home" && href.startsWith("#")) {
//       e.preventDefault();
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Add focus to the clicked link
//     allLinks.forEach(function (link) {
//       link.classList.remove("active");
//     });
//     link.classList.add("active");
//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });


//   // Sticky navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);









// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});




// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  