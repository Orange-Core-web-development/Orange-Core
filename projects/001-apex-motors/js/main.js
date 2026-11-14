import gsap from "gsap";
import Lenis from "lenis";
import { mountVehicleScene } from "./vehicle-scene.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const nav = document.querySelector(".desktop-nav");
const menuButton = document.querySelector(".menu-toggle");

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

if (!reduceMotion && window.matchMedia("(min-width: 851px)").matches) {
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
  const tick = (time) => { lenis.raf(time * 1000); };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
}

if (!reduceMotion) {
  gsap.from(".hero-copy > *", {
    y: 28, opacity: 0, duration: 0.85, stagger: 0.11, ease: "power3.out",
    delay: 0.12
  });
  gsap.from(".hero-stage", { opacity: 0, scale: 0.94, duration: 1.2, ease: "power2.out" });
}

const sceneHost = document.querySelector("#car-scene");
if (sceneHost) {
  mountVehicleScene(sceneHost);
}

const swatches = document.querySelectorAll(".swatch");
swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    swatches.forEach((item) => item.classList.remove("selected"));
    swatch.classList.add("selected");
    window.dispatchEvent(new CustomEvent("apex:paint", { detail: swatch.dataset.colour }));
  });
});
