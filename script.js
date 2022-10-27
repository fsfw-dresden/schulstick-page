let bg = document.querySelector(".background");
window.addEventListener("scroll", () => {
    bg.style["background-position"] = "0px "+(-window.scrollY/2)+"px";
});
