// app.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (menuBtn && mobileMenu && menuIconOpen && menuIconClose) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('hidden'); // Toggle menu visibility

            // Toggle icons using Lucide's recommended way or by toggling classes
            // For simplicity here, we toggle the 'hidden' class on the <i> tags
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');

            // Accessibility: Update aria-expanded attribute
            menuBtn.setAttribute('aria-expanded', String(!isExpanded));
        });

        // --- Optional: Close mobile menu when a link is clicked ---
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is actually open before trying to close it
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuIconOpen.classList.remove('hidden');
                    menuIconClose.classList.add('hidden');
                    // Accessibility: Reset aria-expanded attribute
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });

    } else {
        console.warn("Mobile menu elements not found. Menu functionality disabled.");
    }

    // --- GSAP Animations ---
    // Check if GSAP and ScrollTrigger are loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // 1. Hero Section Animation (On Load)
        const heroTl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
        heroTl
            .from('.hero-content .gsap-fade-in', { opacity: 0, y: 30, stagger: 0.2, delay: 0.3 })
            .from('.hero-graphic .gsap-fade-in-scale', { opacity: 0, scale: 0.9, duration: 1 }, "-=0.6"); // Animate graphic slightly overlapping text animation

        // 2. General Section Fade-in Animations (On Scroll)
        const sections = gsap.utils.toArray('section'); // Get all sections

        sections.forEach((section, index) => {
            // Animate section headings
            const heading = section.querySelector('.section-heading');
            if (heading) {
                gsap.from(heading, {
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 85%', // Trigger when 85% of the element enters the viewport
                        end: 'bottom 20%',
                        toggleActions: 'play none none none', // Play animation once on enter
                        // markers: true, // Uncomment for debugging
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }

            // Specific animations for elements within sections
            // Process Cards
            const processCards = section.querySelectorAll('.process-card');
            if (processCards.length > 0) {
                gsap.from(processCards, {
                    scrollTrigger: {
                        trigger: section.querySelector('.grid'), // Trigger based on the grid container
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    stagger: 0.2, // Animate cards one after another
                    ease: 'power2.out'
                });
            }

            // Pricing Cards
            const pricingCards = section.querySelectorAll('.pricing-card');
            if (pricingCards.length > 0) {
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
            if (servicesList) {
                 gsap.from(servicesList.children, { // Animate individual list items
                    scrollTrigger: {
                        trigger: servicesList,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: -30, // Slide in from left
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            }

            // Portfolio Items
            const portfolioItems = section.querySelectorAll('.portfolio-item');
            if (portfolioItems.length > 0) {
                gsap.from(portfolioItems, {
                    scrollTrigger: {
                        trigger: section.querySelector('.grid'),
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    scale: 0.95,
                    y: 30,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            }

            // Features Section (Left/Right Fade-in)
            const featuresText = section.querySelector('.features-text');
            const featuresCard = section.querySelector('.features-card');
            if (featuresText && featuresCard) {
                 gsap.from(featuresText, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: -50,
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
                    duration: 1,
                    ease: 'power3.out'
                });
            }

             // CTA Text
            const ctaText = section.querySelector('.cta-text');
            if (ctaText) {
                gsap.from(ctaText, {
                    scrollTrigger: {
                        trigger: ctaText,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    scale: 0.9,
                    duration: 1,
                    ease: 'power3.out'
                });
            }

            // Contact Form
            const contactForm = section.querySelector('.contact-form');
            if (contactForm) {
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
    }

    // --- Lucide Icons Initialization ---
    // Moved to HTML script tag to ensure it runs after DOM content is loaded.
    // If you dynamically add icons later, call lucide.createIcons();

}); // End DOMContentLoaded
