// app.js

// --- Mobile Menu Toggle ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

// Check if all menu elements exist before adding event listener
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


// --- Lucide Icons Initialization ---
// This is called in the HTML body now after the script loads.
// If you need to dynamically create icons later with JS, you can call:
// lucide.createIcons();
// after adding elements with data-lucide attributes.


// --- Add other JavaScript functionality below ---
