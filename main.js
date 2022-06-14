(function() {
"use strict";

gsap.registerPlugin(TextPlugin);
gsap.to('.lead', { duration: 4, delay: 0.5, text: 'Hey, We Are<br>Paramadina<br>Entrepreneur Club'})
gsap.from('.button-hero', { duration: 3, x: -100, opacity: 0, delay: 2, ease: 'back' })
 window.addEventListener('scroll', function() {
  gsap.to('.waiting-join', { duration: 3, delay: 0.5, text: 'What are u waiting for?<br>Let \'s join us'});

});



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


    
})()
