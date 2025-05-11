import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Always register once
gsap.registerPlugin(ScrollTrigger);

// Export them ready to use
export { gsap, ScrollTrigger };
