var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})


document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x -200 +"px"
    blur.style.top = dets.y -200 +"px"
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration : 0.5,
    height:"75px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
      //  markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img , #about-us-in", {
     y:50,
     opacity:0,
     duration:1,
     scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
     }
})
/*gsap.from(".cards", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger : 0.1,
    scrollTrigger:{
       trigger:".cards",
       markers:"true",
       scroller:"body",
       start:"top 70%",
       end:"top 65%",
       scrub:1
    }
})*/
gsap.from("#colon1",{
    y:-70,
    x:-70,
   scrollTrigger:{
    trigger:"#colon1",
    scroller: "body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
   }
})
gsap.from("#colon2",{
    y:70,
    x:70,
   scrollTrigger:{
    trigger:"#colon1",
    scroller: "body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
   }
})
gsap.from("#fresh", {
    // y:50,
     opacity:0,
     duration:1,
     scrollTrigger:{
        trigger:"#fresh",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
     }
 })

// Assume this code is triggered when the user reaches page 3 or when needed
setTimeout(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;
  
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, 1000); // Delay of 3000 milliseconds (3 seconds) before starting the counters
