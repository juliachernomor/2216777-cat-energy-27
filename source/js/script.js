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

tlPreview.from('#nutrition',{
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
  scrollTrigger:{
    // markers:true,
    trigger: '.advantages__title',
    end:'30% 60%',
    scrub:1.5,
    toggleActions: 'play none none reverse',
}
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

  function parallax(){
    const preview = document.querySelector('#secton-nutrition');

    const initialX = preview.offsetLeft + preview.offsetWidth / 0.1;
    const initialY = preview.offsetTop + preview.offsetHeight / 0.1;

    preview.addEventListener('mousemove', function(event) {
      const mouseX = event.clientX - initialX;
      const mouseY = event.clientY - initialY;

      gsap.to('#nutrition', {
        rotationX: -mouseY * 0.2, // Изменение угла поворота по оси X
        rotationY: -mouseX * 0.2, // Изменение угла поворота по оси Y
        ease: 'power2.out'
      });
  });

}
parallax()


var rotationSnap = 90;
Draggable.create("#logo", {
    type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable!
    inertia:true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
    snap:function(endValue) {
        //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
        return Math.round(endValue / rotationSnap) * rotationSnap;
    }
});
