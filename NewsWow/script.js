// gsap animation
gsap.from('.jumbotron', {opacity: 0, duration: 1.2, y: 30});
gsap.from('.readButton', {opacity: 0, duration: 1, y: -30});
gsap.from('.learn', {opacity: 0, duration: 1, y: -30});
gsap.from('.card1', {opacity: 0, duration: 1, x: -50});
gsap.from('.card2', {opacity: 0, duration: 1, x: 50});
ScrollOut({
    // once: true,
    threshold: 0.5
});


// scrollToTop
const btnTop = document.querySelector(".scrollToTop");

window.onload = ()=>{
    btnTop.setAttribute("style", "display: none")  
}

window.onscroll = ()=>{
    if(document.documentElement.scrollTop<60){
        btnTop.setAttribute("style", "display: none")
    }
    
    else{
        btnTop.setAttribute("style", "display: block")
        btnTop.addEventListener("click", function(){
            window.scrollTo(0, 0)
        });
    }
}

// extract spinner

const extractBtn = document.querySelector(".extract");
const spin = document.querySelector("#spin");
const changeButton = ()=>{
    spin.setAttribute("style", "display: inline-block");
    extractBtn.innerHTML="Extracting...";
}
