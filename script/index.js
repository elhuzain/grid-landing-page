import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/index.js";

const menuButton = document.getElementById("menu-button");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
let isMenuOpen = false;

const mainTl = gsap.timeline();
mainTl.from("h1", { duration: 0.2, opacity: 0, y: 5, ease: "power4.out" })
      .from("#hero p", { duration: 0.2, opacity: 0, y: 5, ease: "power4.out"})
      .from("article", {duration: 0.2, opacity: 0, y: 5, stagger: 0.1, ease: "power4.out"})

let menuTl = gsap.timeline();
menuTl.pause();

menuTl.to("#close-icon", { duration: 0, opacity: 1 })
    .to("#open-icon", { duration: 0, opacity: 0 })
    .to("#nav-overlay", { duration: 0.1, opacity: 1 })
    .from(".nav-link", { duration: 0.1, opacity: 0, stagger: 0.1 })

menuButton.addEventListener("click", () => {
    if (isMenuOpen) {
        menuTl.reverse();
        isMenuOpen = false;
    } else {
        menuTl.play();
        isMenuOpen = true;
    }
})