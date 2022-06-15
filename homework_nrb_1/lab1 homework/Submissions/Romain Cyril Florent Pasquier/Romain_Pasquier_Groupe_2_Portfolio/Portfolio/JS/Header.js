const titreSpans = document.querySelectorAll('.title');
const btns = document.querySelectorAll('.button_cv');
const fleches = document.querySelectorAll('.fleche');
const logo = document.querySelector('.logo_portfolio');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const nav = document.querySelector('nav');

window.addEventListener('load', () => 
    {
        const TL = gsap.timeline({paused: true});
        TL
            .staggerFrom(titreSpans, 0.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.2)
            .staggerFrom(btns, 2, {opacity: 0, ease: "power2.out"}, 0.8, '-=0.9')
            .staggerFrom(fleches, 1, {opacity: 0, ease: "power2.out"}, 0.5, '-=2.5')
            .from(l1, 2, {width: 0, ease: "power.out"}, "-=4")
            .from(l2, 2, {width: 0, ease: "power.out"}, "-=3")
            .from(logo, 2, {transform: "scale(0", ease: "power2.out"}, "-=4")
            .from(nav, 2, {transform: "scale(0", ease: "power2.out"}, "-=3")
        TL.play();
    }
)

const header = document.querySelector('.header_container')

window.addEventListener('scroll', () =>
    {
        const scrolled = window.scrollY;

        header.style.marginTop = -(scrolled/4) + 'px';
    }
)

