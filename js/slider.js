const slider = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const sliders = document.querySelectorAll('.sliderContainer');
    
        sliders.forEach(slider => {
           /*  const paginations = slider.parentElement.querySelectorAll('.pagination'); */
            const leftArrow = slider.parentElement.querySelector('.arrow-left');
            const rightArrow = slider.parentElement.querySelector('.arrow-right');
    
            /* let scrollAmount = 0; */
            const scrollStep = slider.clientWidth * 1.0;
    
            rightArrow.addEventListener("click", () => {
                slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    
                const activePagination = document.querySelector('.active-pagination');
    
                let nextPagination = activePagination.nextElementSibling;
    
                activePagination.classList.remove("active-pagination");
                nextPagination.classList.add("active-pagination");
            });
    
            leftArrow.addEventListener("click", () => {
                slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
    
                const activePagination = document.querySelector('.active-pagination');
    
                let prevPagination = activePagination.previousElementSibling;
    
                activePagination.classList.remove("active-pagination");
                prevPagination.classList.add("active-pagination");
            });
        });
    });    
}

export default slider