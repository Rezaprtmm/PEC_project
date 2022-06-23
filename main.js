(function() {
"use strict";

gsap.registerPlugin(TextPlugin);
gsap.to('.lead', { duration: 4, delay: 0.5, text: 'Hey, We Are<br>Paramadina<br>Entrepreneur Club'})
gsap.from('.button-hero', { duration: 3, x: -100, opacity: 0, delay: 2, ease: 'back' })
 window.addEventListener('scroll', function() {
  gsap.to('.waiting-join', { duration: 3, delay: 0.5, text: 'What are u waiting for?<br>Let \'s join us'});

});
gsap.to('.what', { duration: 2, delay: 0.5, text: 'What is PEC'})
gsap.to('.definition-pec', { duration: 8, delay: 1, text: 'PEC adalah organisasi wirausaha yang dibentuk pada tahun 2021 dengan tujuan memberikan wadah bagi mahasiswa Universitas Paramadina untuk berwirausaha dan menciptakan lingkungan yang suportif serta mengasah mindset entrepreneurship.'})


const activitiesImage = document.querySelectorAll('.activities-card');

activitiesImage.forEach((img, i) => {
img.dataset.aos = 'flip-left';
img.dataset.aosDelay = i * 100;
img.dataset.aosDuration = 1000;
});

const programImage = document.querySelectorAll('.program-card');

programImage.forEach((img, i) => {
img.dataset.aos = 'flip-left';
img.dataset.aosDelay = i * 100;
img.dataset.aosDuration = 1000;
});


AOS.init({
    duration: 2000    
  });

/*=== Carousel ===*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    // when window width is <= 499px
    499: {
        slidesPerView: 2,
        spaceBetweenSlides: 20
    }
    },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
    
})()
