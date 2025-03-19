// nav.js
const nav = (): void => {
    document.addEventListener("scroll", () => {
        const navbar: HTMLElement | null = document.getElementById("header");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("headerscroll");
            } else {
                navbar.classList.remove("headerscroll");
            }
        }
    });
};

export default nav;
