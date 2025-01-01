// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});










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
  // document.querySelectorAll('.main-nav-link').forEach(link => {
  //   link.addEventListener('click', function() {
  //     document.querySelectorAll('.main-nav-link').forEach(link => {
  //       link.classList.remove('active');
  //     });
  //     this.classList.add('active');
  //   });
  // });
  
  // Scroll Event to Update Active Link
  // window.addEventListener('scroll', highlightLink);
  
  // Call on page load to check which section is in view
  // document.addEventListener('DOMContentLoaded', highlightOnLoad);
  




// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#" || href === "#home"){
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href !== "#home" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Add focus to the clicked link
    allLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    link.classList.add("active");
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
  
});


  // Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // rootMargin: "-20px 0 0 0",
  }
);
obs.observe(sectionHeroEl);














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
  










  //Testimonials slider

  // Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();






// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;






//Form



document.getElementById("submitBtn").addEventListener("click", function () {
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("messageForm");
  
  // Get form fields
  const name = form.elements["Name"];
  const email = form.elements["Email"];
  const phone = form.elements["Phone"];
  const subject = form.elements["Subject"];
  const message = form.elements["Message"];

  // Validate fields
if (!name.value.trim()) {
  name.focus(); // Focus on the empty input
  name.style.boxShadow = "0 0 5px red"; // Add red glow
  name.style.border = "1px solid #ccc"; // Keep consistent border
  return;
} else {
  name.style.boxShadow = ""; // Remove the box-shadow if valid
  name.style.border = "1px solid #ccc"; // Reset to default border
}

if (!email.value.trim()) {
  email.focus();
  email.style.boxShadow = "0 0 5px red";
  email.style.border = "1px solid #ccc";
  return;
} else {
  email.style.boxShadow = "";
  email.style.border = "1px solid #ccc";
}

if (!phone.value.trim()) {
  phone.focus();
  phone.style.boxShadow = "0 0 5px red";
  phone.style.border = "1px solid #ccc";
  return;
} else {
  phone.style.boxShadow = "";
  phone.style.border = "1px solid #ccc";
}

if (!subject.value.trim()) {
  subject.focus();
  subject.style.boxShadow = "0 0 5px red";
  subject.style.border = "1px solid #ccc";
  return;
} else {
  subject.style.boxShadow = "";
  subject.style.border = "1px solid #ccc";
}

if (!message.value.trim()) {
  message.focus();
  message.style.boxShadow = "0 0 5px red";
  message.style.border = "1px solid #ccc";
  return;
} else {
  message.style.boxShadow = "";
  message.style.border = "1px solid #ccc";
}


  // Change button text to indicate submission is in progress
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true; // Disable button to prevent multiple clicks

  const formData = new FormData(form);

  fetch("formupload.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // Update button text to show success message
      submitBtn.innerText = "Message Sent!";
      submitBtn.style.backgroundColor = "green"; // Optional: change button color

      // Reset the form after success
      form.reset();

      // Reset button after 5 seconds
      setTimeout(() => {
        submitBtn.innerText = "Send";
        submitBtn.style.backgroundColor = ""; // Reset to default color
        submitBtn.disabled = false;
      }, 3000); // 3000 milliseconds = 3 seconds
    })
    .catch((error) => {
      // Update button text to show an error
      submitBtn.innerText = "Error! Try Again";
      submitBtn.style.backgroundColor = "red"; // Optional: change button color

      // Reset button after 5 seconds
      setTimeout(() => {
        submitBtn.innerText = "Send";
        submitBtn.style.backgroundColor = ""; // Reset to default color
        submitBtn.disabled = false;
      }, 5000); // 5000 milliseconds = 5 seconds

      console.error("Error:", error);
    });
});
