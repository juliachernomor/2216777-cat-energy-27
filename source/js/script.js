// меню
let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});



const tlPreview = gsap.timeline({})

tlPreview.from('.nutrition__wrapper',{
   x:400,
   duration:3,
   opacity:0,
   ease:"back.out(1.5)",
 })

 .from('.nutrition__link',{
  x:-400,
  duration:3,
  opacity:0,
  ease:"back.out(1.5)",
},'<')

.from('.advantages__title',{
  x:-400,
  duration:3,
  opacity:0,
  ease:"back.out(1.5)",
})

 .from('#advantages-list',{
   stagger:0.1,
   opacity:0,
   y:200,
   scrollTrigger:{
       // markers:true,
       trigger: '#advantages-list',
       start: 'top 90%',
       end:'30% 60%',
       scrub:1.5,
       toggleActions: 'play none none reverse',
   }
 })

 .from('#example',{
   stagger:0.1,
   opacity:0,
   y:100,
   scrollTrigger:{
       // markers:true,
       trigger: '#example',
       start: 'top 90%',
       end:'30% 60%',
       scrub:1.5,
       toggleActions: 'play none none reverse',
   }
 })
