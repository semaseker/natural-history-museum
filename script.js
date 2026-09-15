gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
});


/* =========================================================
   SIDE MENU
   Timeline is cleared and rebuilt every time it opens
========================================================= */

const menuTriggers = document.querySelectorAll(".menu-trigger");
const closeMenuBtn = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");

const menuItems = sideMenu.querySelectorAll(
    ".side-menu__title, .side-menu__subtitle, .form-group, .side-menu__total"
);

let menuTl = gsap.timeline({
    paused: true
});

function rebuildMenuTimeline() {

    menuTl.clear();

    gsap.set(menuItems, {
        y: 30,
        opacity: 0
    });

    menuTl
        .to(sideMenu, {
            duration: 0.001
        })
        .to(menuItems, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08
        });
}

menuTriggers.forEach((trigger) => {

    trigger.addEventListener("click", (event) => {

        event.preventDefault();

        sideMenu.classList.add("open");

        rebuildMenuTimeline();

        menuTl.play(0);
    });

});

closeMenuBtn.addEventListener("click", () => {

    sideMenu.classList.remove("open");

    menuTl.clear();

});


/* =========================================================
   CHARACTER ANIMATION
   H2 / H3
========================================================= */

document.querySelectorAll("main h2, main h3").forEach((heading) => {

    const split = new SplitText(heading, {
        type: "words, chars",
        wordsClass: "split-word"
    });

    gsap.from(split.chars, {

        opacity: 0,
        yPercent: 100,

        duration: 0.6,
        ease: "power3.out",
        stagger: 0.02,

        scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true
        }

    });

});


/* =========================================================
   CHARACTER ANIMATION
   HERO TITLE
========================================================= */

document.querySelectorAll(".hero__title").forEach((heading) => {

    const split = new SplitText(heading, {
        type: "words, chars",
        wordsClass: "split-word"
    });

    gsap.from(split.chars, {

        opacity: 0,
        yPercent: 100,

        duration: 0.7,
        ease: "power3.out",
        stagger: 0.03,

        scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true
        }

    });

});


/* =========================================================
   PARAGRAPH FADE-IN ANIMATION
   ALL <p> ELEMENTS
========================================================= */

document.querySelectorAll("p").forEach((paragraph) => {

    gsap.from(paragraph, {

        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {
            trigger: paragraph,
            start: "top 85%",
            once: true
        }

    });

});


/* =========================================================
   IMAGE REVEAL ANIMATION
========================================================= */

document.querySelectorAll("main img").forEach((image) => {

    gsap.from(image, {

        opacity: 0,
        scale: 1.1,
        y: 40,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
            trigger: image,
            start: "top 85%",
            once: true
        }

    });

});


/* =========================================================
   DIRECTIONALLY AWARE HEADER
========================================================= */

const siteHeader = document.querySelector(".site-header");

ScrollTrigger.create({

    start: "top top",

    end: "max",

    onUpdate: (self) => {

        if (self.direction === 1 && self.scroll() > 150) {

            gsap.to(siteHeader, {
                yPercent: -100,
                duration: 0.4,
                ease: "power2.out",
                overwrite: true
            });

        } else {

            gsap.to(siteHeader, {
                yPercent: 0,
                duration: 0.4,
                ease: "power2.out",
                overwrite: true
            });

        }

    }

});


/* =========================================================
   REFRESH SCROLLTRIGGER
========================================================= */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});