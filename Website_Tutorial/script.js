let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.line',3,{y:-500})
.to('.flower',3,{y:-200},'-=3')
.fromTo('.bg1', 3, {y: -50},{y:0, duration:3}, '-=3')
.to('.content',5,{top:'0%'},'-=3')
.fromTo('.content-videos', {opacity:0.3}, {opacity: 1, duration: 2})
.fromTo('.content-texts', {opacity:0.3}, {opacity: 1, duration: 2})
.to('.content-texts',10,{y:-330})
.to('.second_page_content',10,{top:'0'})
.fromTo('.bg2',{opacity:0.1},{opacity: 1, duration: 10})


let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '350%',
    triggerHook: 0
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle');
        
    });
    
    
}

navSlide();
    



