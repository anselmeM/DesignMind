#   DesignMind Creative Studio

This project is a single-page website for "DesignMind Creative Studio," a fictional agency specializing in branding and web design. It's built using HTML, CSS, and JavaScript, with Tailwind CSS for styling and GSAP for animations.

##   Table of Contents

* [Project Description](#project-description)
* [Technologies Used](#technologies-used)
* [File Structure](#file-structure)
* [Setup Instructions](#setup-instructions)
* [Demo Link](#demo-link)
* [Key Features](#key-features)
* [GSAP Animations](#gsap-animations)
* [Mobile Menu](#mobile-menu)
* [Credits](#credits)
* [Contact](#contact)

##   Project Description

The DesignMind website showcases the services offered by the studio, including branding, web design, and digital marketing. It's designed to be visually appealing and provide a smooth user experience with animations and a responsive layout.

##   Technologies Used

* **HTML:** The structure of the web page.
* **CSS:** Styling of the web page, primarily using Tailwind CSS.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development. (Included via CDN)
* **JavaScript:** For interactivity, including mobile menu functionality and animations.
* **GSAP (GreenSock Animation Platform):** A JavaScript library for creating high-performance animations. (Included via CDN)
* **Lucide Icons:** A library of icons. (Included via CDN)

##   File Structure

DesignMind/
├── index.html        # The main HTML file
├── app.js            # JavaScript file for interactivity and animations
├── Main.css          # CSS file for any custom styles (not Tailwind)


##   Setup Instructions

Since this project primarily uses CDN links, you can simply open the `index.html` file in a web browser to view it.

1.  **Clone the repository** (if you downloaded the code, you can skip this step):

    ```bash
    git clone [repository URL]
    ```
2.  **Open `index.html`** in your browser.

##   Demo Link

You can view a live demo of the website here: [https://anselmem.github.io/DesignMind/](https://anselmem.github.io/DesignMind/)

##   Key Features

* **Hero Section:** A visually engaging introduction with a heading, description, and call-to-action button.
* **Services Section:** Highlights the services offered by DesignMind.
* **Work/Portfolio Section:** Showcases recent projects.
* **Process Section:** Explains the studio's work process.
* **Pricing Section:** Presents pricing plans.
* **Features Section:** Details key features and includes a code example.
* **Contact Section:** A contact form for users to send messages.
* **Mobile-Responsive Design:** The layout adapts to different screen sizes.
* **Smooth Scrolling:** Anchor links use smooth scrolling.
* **GSAP Animations:** Engaging animations on page load and scroll.
* **Mobile Menu:** A functional mobile navigation menu.

##   GSAP Animations

The project uses GSAP to create various animations:

* **Hero Section Animation:** Fades in and scales elements on page load.
* **General Section Fade-in Animations:** Fades in headings, cards, lists, and form elements on scroll.
* **Features Section Animation:** Fades in text and the code example from opposite sides.

##   Mobile Menu

The mobile menu is toggled using JavaScript. It's hidden by default on larger screens and appears when the menu button is clicked on smaller screens. Clicking a link in the mobile menu closes it. Aria attributes are used for accessibility.

##   Credits

* **Tailwind CSS:** For styling.
* **GSAP (GreenSock Animation Platform):** For animations.
* **Lucide Icons:** For icons.
* **Placeholder Images:** [placeholder.co](https://placeholder.co/)

##   Contact

Feel free to reach out if you have any questions or feedback.