const slider = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const sliders = document.querySelectorAll('.sliderContainer');

        sliders.forEach(slider => {
            const parentElement = slider.parentElement;

            // Verifica che parentElement non sia null
            if (parentElement) {
                const leftArrow = parentElement.querySelector('.arrow-left') as HTMLElement | null;
                const rightArrow = parentElement.querySelector('.arrow-right') as HTMLElement | null;

                console.log("scrollLeft: ", slider.scrollLeft);
                console.log("clientWidth", slider.clientWidth);
                console.log("scrollWidth", slider.scrollWidth);

                const scrollStep = slider.clientWidth * 1.0;

                const updateArrows = () => {
                    if (slider.scrollLeft <= 0 && leftArrow) {
                        leftArrow.style.opacity = "0.5"; 
                        leftArrow.style.pointerEvents = "none"; 
                    } else if (leftArrow) {
                        leftArrow.style.opacity = "1";
                        leftArrow.style.pointerEvents = "auto";
                    }
                
                    if (slider.scrollWidth >= slider.clientWidth) {
                        if (slider.scrollLeft >= 1500 && rightArrow) {
                            rightArrow.style.opacity = "0.5";
                            rightArrow.style.pointerEvents = "none";
                        } else if (rightArrow) {
                            rightArrow.style.opacity = "1";
                            rightArrow.style.pointerEvents = "auto";
                        }
                    } else if (rightArrow) {
                        rightArrow.style.opacity = "0.5";
                        rightArrow.style.pointerEvents = "none";
                    }
                };

                if (rightArrow) {
                    rightArrow.addEventListener("click", () => {
                        slider.scrollBy({ left: scrollStep, behavior: "smooth" });
                        setTimeout(updateArrows, 500);
                        console.log("scrollLeft: ", slider.scrollLeft);
                        console.log("clientWidth", slider.clientWidth);
                        console.log("scrollWidth", slider.scrollWidth);
                    });
                }

                if (leftArrow) {
                    leftArrow.addEventListener("click", () => {
                        slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
                        setTimeout(updateArrows, 500);
                        console.log("scrollLeft: ", slider.scrollLeft);
                        console.log("clientWidth", slider.clientWidth);
                        console.log("scrollWidth", slider.scrollWidth);
                    });
                }

                updateArrows();
            }
        });
    });
};

export default slider;
