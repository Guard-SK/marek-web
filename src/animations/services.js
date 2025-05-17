import { gsap } from "./gsap-core.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateServices() {
  const cards = gsap.utils.toArray(".card");

  cards.forEach((card) => {
    const title = card.querySelector(".title-text");
    const extraText = card.querySelector(".extra-text");
    const button = card.querySelector(".learn-more-button");

    ScrollTrigger.create({
      trigger: card,
      start: "center center",
      end: "bottom top",
      scroller: "#main-content",
      toggleClass: { targets: card, className: "expanded" },
      onEnter: () => {
        gsap.to(card, { height: 400, duration: 0.5, ease: "power2.out" });
        gsap.to(title, { scale: 1.2, duration: 0.5, ease: "power2.out" });
        gsap.to(extraText, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(button, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", delay: 0.2 });
      },
      onLeaveBack: () => {
        gsap.to(card, { height: 250, duration: 0.5, ease: "power2.in" });
        gsap.to(title, { scale: 1, duration: 0.5, ease: "power2.in" });
        gsap.to(extraText, { opacity: 0, scale: 0.8, duration: 0.5, ease: "power2.in" });
        gsap.to(button, { opacity: 0, scale: 0.8, duration: 0.5, ease: "power2.in" });
      },
    });
  });

  ScrollTrigger.refresh();
}