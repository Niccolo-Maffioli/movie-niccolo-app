// nav.js
const nav = () => {
    document.addEventListener("scroll", () => {
        const navbar = document.getElementById("header");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("headerscroll");
            }
            else {
                navbar.classList.remove("headerscroll");
            }
        }
    });
};
export default nav;
