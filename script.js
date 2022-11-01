let bg = document.querySelector("body");
window.addEventListener("scroll", () => {
    bg.style["background-position"] = "0px "+(window.scrollY/2)+"px";
});
