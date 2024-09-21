const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
var timer;

function circleChapta(){
    var xScale = 1
    var yScale = 1

    var xprev = 0
    var yprev = 0

    window.addEventListener("mousemove", function(dets){

        clearTimeout(timer)
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xScale = gsap.utils.clamp(.8, 1.2, xdiff);
        yScale = gsap.utils.clamp(.8, 1.2, ydiff);

        document.querySelector(".mouse").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xScale}, ${yScale})`

        timer = setTimeout(() => {
        document.querySelector(".mouse").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1,1)`
        }, 100);
    })
}

circleChapta()

function heroPage(){
    var tl = gsap.timeline()

    tl.from("nav a , nav h2",{
        y : "20vh",
        ease : "Power3.out" 
    })

    tl.from(".hero-page h1",{
        y : "40vh",
        // duration : 0.6,
        stagger : 0.2
    })

    tl.from(".hero-page .down a",{
        opacity : 0,
    })

    tl.from(".hero-page h3",{
        y : "-5vh",
        duration : 0.6,
        stagger : 0.1,
        // duration : 3
    })
}

heroPage()

function page2(){
    var elems = document.querySelectorAll(".page2 .elem")
    var images = document.querySelectorAll(".page2 .elem img")

    elems.forEach(function(elem){
        var rotate = 0
        var diffrot = 0
        
        elem.addEventListener("mousemove",function(dets){
            var diff = dets.clientY - elem.getBoundingClientRect().top
            diffrot = dets.clientX - rotate
            rotate = dets.clientX
            gsap.to(elem.querySelector(".elem img"),{
                opacity : 1,
                top : diff,
                left : dets.clientX,
                rotate : gsap.utils.clamp(-30 , 30 , diffrot)
                // ease :  "expo.out",
            })
        })

        elem.addEventListener("mouseleave",function(dets){
            gsap.to(elem.querySelector(".elem img"),{
                opacity : 0
            })
        })
    })
}

page2()
