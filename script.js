'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


const sr = ScrollReveal({
    origin: 'top',
    distance: '85px', 
    duration: 2500,
    reset: true
})

sr.reveal ('.hero-text',{delay:400});
sr.reveal ('.hero-title',{delay:300});


sr.reveal ('.section-subtitle',{delay:300});
sr.reveal ('.section-title',{delay:300});
sr.reveal ('.section-text',{delay:400});

sr.reveal ('.popular-card',{delay:400});

sr.reveal ('.package-card',{delay:400});

sr.reveal ('.gallery-item',{delay:400});

sr.reveal ('.test',{delay:400});

sr.reveal ('.review-card',{delay:500});



