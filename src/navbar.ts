// nav.js
const nav = (): void => {
  document.addEventListener("scroll", () => {
    const navbar = document.getElementById("header") as HTMLElement | null;

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

