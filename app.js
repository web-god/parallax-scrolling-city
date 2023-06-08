function parallax(element,distance,speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll',function(){
    parallax('header', window.scrollY, 0.1);
    parallax('.edif1', window.scrollY, 0.5);
    parallax('.edif2',window.scrollY, 0.4);
    parallax('.edif3',window.scrollY, 0.1);
    parallax('.nube1',window.scrollY, 0.7);
    parallax('.nube2',window.scrollY, 0.7);
    parallax('.nube3',window.scrollY, 0.7);
})
