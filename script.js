const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//jab mouse move ho tho hum log skew kar paye aur max ya min skew set kar paye 
var timeout;
function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  circleChaptaKaro();
  circleMouseFollower();
function firstpage() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
firstpage();

//trrno element ko slct kro uske baad teeno par ek mouse ove lagao jab
// jab mousemob ho to ye pta kaor ki amouse kha par HTMLDetailsElement,
// jiska na=mtlb hai mouse ki x and y position pata lkaroab mo9use ki a 


document.querySelectorAll('.elem')
.forEach(function(elem){
    var rotate =0;
    var diffrot =0;
    elem.addEventListener('mousemove',(dets)=>{
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot  = dets.clientX - rotate;
        rotate  = dets.clientX;
        var a = gsap.utils.clamp(-20,20,diffrot*0.6);

        gsap.to(elem.querySelector('img'),{
            opacity:1,
            ease: Power3,
            top:diff,
            left: dets.clientX,
            rotate:a
        }) 
        // console.log(dets.clientX,dets.clientY);
    })
    elem.addEventListener('mouseleave',(dets)=>{
        gsap.to(elem.querySelector('img'),{
            opacity:0,
            ease:Power3,
            duration:0.5
        })

    })
}); 