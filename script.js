
      // Import necessary libraries
      import { gsap } from 'gsap';
      import { ScrollTrigger } from 'gsap/ScrollTrigger';
      import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

      // Initialize gsap and plugins
      gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

      // Animation on page load
      function loadAnimation() {
         // Logo animation
         gsap.from('#logo', {
            duration: 1.5,
            scale: 0.5,
            opacity: 0,
            ease: 'power2.inOut'
         });

         // Menu animation
         gsap.from('.menu-item', {
            duration: 1.5,
            x: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.inOut'
         });

         // Background animation
         gsap.to('body', {
            duration: 1.5,
            backgroundColor: '#121212',
            ease: 'power2.inOut'
         });
      }

      // Menu item animation on hover
      function menuItemHover() {
         const menuItems = document.querySelectorAll('.menu-item');

         menuItems.forEach(item => {
            item.addEventListener('mouseover', () => {
               gsap.to(item, {
                  duration: 0.5,
                  scale: 1.1,
                  ease: 'power2.inOut'
               });
            });

            item.addEventListener('mouseout', () => {
               gsap.to(item, {
                  duration: 0.5,
                  scale: 1,
                  ease: 'power2.inOut'
               });
            });
         });
      }

      // Initialize functions
      loadAnimation();
      menuItemHover();
   