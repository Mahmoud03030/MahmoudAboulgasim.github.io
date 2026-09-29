const header = document.querySelector(".site-header");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");


/* Header appearance while scrolling */
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* Mobile navigation */
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen.toString()
    );
});


/* Close mobile navigation after selecting a link */
document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
