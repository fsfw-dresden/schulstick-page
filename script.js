let bg = document.querySelector("body");
let content = document.querySelector(".content");
window.addEventListener("scroll", () => {
    
    content.style["background-position"] = "0px "+(window.scrollY*0.75)+"px";
    
});

let bigImage = document.querySelector(".single-big img.front");
let bigImageBack = document.querySelector(".single-big img.back");
function switchImage(img) {
    bigImageBack.src = img.src;
    bigImage.classList.add("disappearing");
    setTimeout(() => {
        if (imageIntervalRunning) {
            bigImage.src = bigImageBack.src;
            bigImage.classList.remove("disappearing");
        }
    }, 500)

}


[...document.querySelectorAll(".single-small .overlay p")].forEach(p => {
    p.innerText = p.innerText.slice("/assets/img/slider/".length);
    p.innerText = p.innerText.slice(0,p.innerText.length - 4);
});



let imageIndex = 0;
let imageIntervalRunning = true;
let smallImages = [...document.querySelectorAll(".single-small img")];
smallImages[imageIndex].parentNode.classList.add("active");
let imageInterval = setInterval(() => {
    imageIndex++;
    if (imageIndex >= 3) imageIndex = 0;
    if (imageIntervalRunning) switchImage(smallImages[imageIndex]);
    document.querySelector(".single-small.active").classList.remove("active");
    smallImages[imageIndex].parentNode.classList.add("active");
}, 4000);