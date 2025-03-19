// nav.js
var nav = function () {
    document.addEventListener("scroll", function () {
        var navbar = document.getElementById("header");
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
// Esporta la funzione
export default nav;
