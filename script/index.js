import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/index.js";

const menuButton = document.getElementById("menu-button");
const navOverlay = document.getElementById("nav-overlay");
let isMenuOpen = false;

const mainTl = gsap.timeline();
mainTl.from("h1", { duration: 0.2, opacity: 0, y: 5, ease: "power4.out" })
    .from("#hero p", { duration: 0.2, opacity: 0, y: 5, ease: "power4.out" })
    .from("article", { duration: 0.2, opacity: 0, y: 5, stagger: 0.1, ease: "power4.out" })

let menuButtonsTl = gsap.timeline();
let menuTl = gsap.timeline();

menuButtonsTl.pause();
menuTl.pause();

menuButtonsTl.to("#open-icon", { duration: 0.2, opacity: 0, rotate: 90 })
    .to("#close-icon", { duration: 0.2, opacity: 1, rotate: 90 })
    

menuTl.to("#nav-overlay", { duration: 0.1, opacity: 1 })
    .from("#nav", {
        duration: 0.2, opacity: 0, x: "100%"
    })
    .from(".nav-link", { duration: 0.1, opacity: 0, stagger: 0.1 })

menuButton.addEventListener("click", () => {
    if (isMenuOpen) {
        menuButtonsTl.reverse();
        menuTl.reverse();
        navOverlay.classList.add("pointer-events-none");
        isMenuOpen = false;
    } else {
        menuButtonsTl.play();
        menuTl.play();
        navOverlay.classList.remove("pointer-events-none");
        isMenuOpen = true;
    }
})