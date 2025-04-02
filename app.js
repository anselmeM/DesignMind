// app.js

document.addEventListener('DOMContentLoaded', () => {
    // This event listener ensures that the code inside runs only after the entire HTML document has been parsed and the DOM is ready.
    // This is crucial because we're manipulating DOM elements, and they need to exist before we can interact with them.

    // --- Mobile Menu Toggle ---
    // This section handles the mobile navigation menu's open/close functionality.
    const menuBtn = document.getElementById('menu-btn');
    // Gets a reference to the mobile menu button element using its ID.
    const mobileMenu = document.getElementById('mobile-menu');
    // Gets a reference to the mobile menu navigation element.
    const menuIconOpen = document.getElementById('menu-icon-open');
    // Gets a reference to the menu icon (hamburger icon).
    const menuIconClose = document.getElementById('menu-icon-close');
    // Gets a reference to the close icon (X icon).

    if (menuBtn && mobileMenu && menuIconOpen && menuIconClose) {
        // This condition checks if all the necessary elements for the mobile menu were found in the DOM.
        // If any of them are missing, the menu functionality will be skipped.
        menuBtn.addEventListener('click', () => {
            // Adds an event listener to the menu button that listens for 'click' events.
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            // Gets the current value of the 'aria-expanded' attribute. This is used for accessibility.
            mobileMenu.classList.toggle('hidden'); // Toggle menu visibility
            // Toggles the 'hidden' class on the mobile menu element.
            // Tailwind CSS uses the 'hidden' class to hide elements.

            // Toggle icons using Lucide's recommended way or by toggling classes
            // For simplicity here, we toggle the 'hidden' class on the <i> tags
            menuIconOpen.classList.toggle('hidden');
            // Toggles the 'hidden' class on the open menu icon.
            menuIconClose.classList.toggle('hidden');
            // Toggles the 'hidden' class on the close menu icon.
            // This effectively switches between the two icons.

            // Accessibility: Update aria-expanded attribute
            menuBtn.setAttribute('aria-expanded', String(!isExpanded));
            // Updates the 'aria-expanded' attribute on the menu button.
            // If the menu was expanded, it's now collapsed, and vice versa.
            // This is important for screen readers to understand the state of the menu.
        });

        // --- Optional: Close mobile menu when a link is clicked ---
        // This section adds the functionality to close the mobile menu when a link inside it is clicked.
        const mobileLinks = mobileMenu.querySelectorAll('a');
        // Gets all the anchor (<a>) elements within the mobile menu.
        mobileLinks.forEach(link => {
            // Loops through each link in the mobile menu.
            link.addEventListener('click', () => {
                // Adds a 'click' event listener to each link.
                // Check if the menu is actually open before trying to close it
                if (!mobileMenu.classList.contains('hidden')) {
                    // Checks if the mobile menu is currently visible (not hidden).
                    mobileMenu.classList.add('hidden');
                    // Hides the mobile menu by adding the 'hidden' class.
                    menuIconOpen.classList.remove('hidden');
                    // Shows the open menu icon.
                    menuIconClose.classList.add('hidden');
                    // Hides the close menu icon.
                    // Accessibility: Reset aria-expanded attribute
                    menuBtn.setAttribute('aria-expanded', 'false');
                    // Sets the 'aria-expanded' attribute to 'false' to indicate that the menu is now closed.
                }
            });
        });

    } else {
        console.warn("Mobile menu elements not found. Menu functionality disabled.");
        // If any of the mobile menu elements are not found, this warning is logged to the console.
    }

    // --- GSAP Animations ---
    // This section handles the animations using GSAP (GreenSock Animation Platform).
    // Check if GSAP and ScrollTrigger are loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Checks if both GSAP and the ScrollTrigger plugin are loaded.
        // If not, the animation code will be skipped.
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        // Registers the ScrollTrigger plugin with GSAP.
        // This is necessary to use scroll-based animations.

        // 1. Hero Section Animation (On Load)
        const heroTl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
        // Creates a GSAP timeline for the hero section animation.
        // 'defaults' sets default values for all animations in this timeline.
        heroTl
            .from('.hero-content .gsap-fade-in', { opacity: 0, y: 30, stagger: 0.2, delay: 0.3 })
            // Animates elements with the class 'gsap-fade-in' inside the 'hero-content' container.
            // 'from' means the animation starts from these values and goes to the element's default values.
            // 'opacity: 0' starts the element as invisible.
            // 'y: 30' starts the element 30 pixels below its normal position.
            // 'stagger: 0.2' staggers the animation of multiple elements by 0.2 seconds.
            // 'delay: 0.3' delays the start of the animation by 0.3 seconds.
            .from('.hero-graphic .gsap-fade-in-scale', { opacity: 0, scale: 0.9, duration: 1 }, "-=0.6"); // Animate graphic slightly overlapping text animation
            // Animates elements with the class 'gsap-fade-in-scale' inside the 'hero-graphic' container.
            // 'scale: 0.9' starts the element at 90% of its normal size.
            // 'duration: 1' sets the animation duration to 1 second.
            // "-=0.6" starts this animation 0.6 seconds before the end of the previous animation, creating an overlap.

        // 2. General Section Fade-in Animations (On Scroll)
        const sections = gsap.utils.toArray('section'); // Get all sections
        // Gets all <section> elements on the page and converts them into an array.

        sections.forEach((section, index) => {
            // Loops through each section element.
            // Animate section headings
            const heading = section.querySelector('.section-heading');
            // Finds the first element with the class 'section-heading' within the current section.
            if (heading) {
                // Checks if a heading was found.
                gsap.from(heading, {
                    // Creates a GSAP animation for the heading.
                    scrollTrigger: {
                        // Defines the ScrollTrigger settings for this animation.
                        trigger: heading,
                        // The animation is triggered when the heading element enters the viewport.
                        start: 'top 85%', // Trigger when 85% of the element enters the viewport
                        // The animation starts when the top of the heading is 85% down the viewport.
                        end: 'bottom 20%',
                        // The animation ends when the bottom of the heading is 20% down the viewport.
                        toggleActions: 'play none none none', // Play animation once on enter
                        // Defines what happens when the trigger enters, leaves, re-enters, and leaves again.
                        // 'play none none none' means play the animation once when it enters, and do nothing on other events.
                        // markers: true, // Uncomment for debugging
                        // Uncommenting this line will show visual markers in the browser for debugging.
                    },
                    opacity: 0,
                    // Starts the heading as invisible.
                    y: 30,
                    // Starts the heading 30 pixels below its normal position.
                    duration: 0.8,
                    // Sets the animation duration to 0.8 seconds.
                    ease: 'power2.out'
                    // Sets the easing function for the animation.
                });
            }

            // Specific animations for elements within sections
            // Process Cards
            const processCards = section.querySelectorAll('.process-card');
            // Finds all elements with the class 'process-card' within the current section.
            if (processCards.length > 0) {
                // Checks if any process cards were found.
                gsap.from(processCards, {
                    // Creates a GSAP animation for the process cards.
                    scrollTrigger: {
                        trigger: section.querySelector('.grid'), // Trigger based on the grid container
                        // The animation is triggered when the grid container within the section enters the viewport.
                        start: 'top 80%',
                        // The animation starts when the top of the grid is 80% down the viewport.
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    stagger: 0.2, // Animate cards one after another
                    // Staggers the animation of multiple cards by 0.2 seconds.
                    ease: 'power2.out'
                });
            }

            // Pricing Cards
            const pricingCards = section.querySelectorAll('.pricing-card');
            // Finds all elements with the class 'pricing-card' within the current section.
            if (pricingCards.length > 0) {
                // Checks if any pricing cards were found.
                gsap.from(pricingCards, {
                    scrollTrigger: {
                        trigger: section.querySelector('.grid'),
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
            }

             // Services List
            const servicesList = section.querySelector('.services-list');
            // Finds the first element with the class 'services-list' within the current section.
            if (servicesList) {
                 gsap.from(servicesList.children, { // Animate individual list items
                    // Animates the children of the services list (list items).
                    scrollTrigger: {
                        trigger: servicesList,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: -30, // Slide in from left
                    // Starts the list items 30 pixels to the left of their normal position.
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            }

            // Portfolio Items
            const portfolioItems = section.querySelectorAll('.portfolio-item');
            // Finds all elements with the class 'portfolio-item' within the current section.
            if (portfolioItems.length > 0) {
                // Checks if any portfolio items were found.
                gsap.from(portfolioItems, {
                    scrollTrigger: {
                        trigger: section.querySelector('.grid'),
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    scale: 0.95,
                    // Starts the portfolio items at 95% of their normal size.
                    y: 30,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            }

            // Features Section (Left/Right Fade-in)
            const featuresText = section.querySelector('.features-text');
            // Finds the first element with the class 'features-text' within the current section.
            const featuresCard = section.querySelector('.features-card');
            // Finds the first element with the class 'features-card' within the current section.
            if (featuresText && featuresCard) {
                // Checks if both features text and card were found.
                 gsap.from(featuresText, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: -50,
                    // Starts the features text 50 pixels to the left of its normal position.
                    duration: 1,
                    ease: 'power3.out'
                });
                 gsap.from(featuresCard, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: 50,
                    // Starts the features card 50 pixels to the right of its normal position.
                    duration: 1,
                    ease: 'power3.out'
                });
            }

             // CTA Text
            const ctaText = section.querySelector('.cta-text');
            // Finds the first element with the class 'cta-text' within the current section.
            if (ctaText) {
                // Checks if the CTA text was found.
                gsap.from(ctaText, {
                    scrollTrigger: {
                        trigger: ctaText,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    scale: 0.9,
                    // Starts the CTA text at 90% of its normal size.
                    duration: 1,
                    ease: 'power3.out'
                });
            }

            // Contact Form
            const contactForm = section.querySelector('.contact-form');
            // Finds the first element with the class 'contact-form' within the current section.
            if (contactForm) {
                // Checks if the contact form was found.
                gsap.from(contactForm, {
                    scrollTrigger: {
                        trigger: contactForm,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power3.out'
                });
            }

        }); // End sections.forEach
    } else {
        console.warn("GSAP or ScrollTrigger not loaded. Animations disabled.");
        // If GSAP or ScrollTrigger is not loaded, this warning is logged to the console.
    }

    // --- Lucide Icons Initialization ---
    // Moved to HTML script tag to ensure it runs after DOM content is loaded.
    // If you dynamically add icons later, call lucide.createIcons();
    // This comment explains that the Lucide icon initialization is now handled in the HTML file.

}); // End DOMContentLoaded
