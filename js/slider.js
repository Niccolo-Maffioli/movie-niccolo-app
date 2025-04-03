const slider = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const sliders = document.querySelectorAll('.sliderContainer');

        sliders.forEach(slider => {
            const leftArrow = slider.parentElement.querySelector('.arrow-left');
            const rightArrow = slider.parentElement.querySelector('.arrow-right');

            console.log("scrollLeft: ", slider.scrollLeft);
            console.log("clientWidth", slider.clientWidth);
            console.log("scrollWidth", slider.scrollWidth);

            const scrollStep = slider.clientWidth * 1.0;

            const updateArrows = () => {
                if (slider.scrollLeft <= 0) {
                    leftArrow.style.opacity = "0.5"; 
                    leftArrow.style.pointerEvents = "none"; 
                } else {
                    leftArrow.style.opacity = "1";
                    leftArrow.style.pointerEvents = "auto";
                }
            
                
                if (slider.scrollWidth >= slider.clientWidth) {
                    if (slider.scrollLeft >= 1500) {
                        rightArrow.style.opacity = "0.5";
                        rightArrow.style.pointerEvents = "none";
                    } else {
                        rightArrow.style.opacity = "1";
                        rightArrow.style.pointerEvents = "auto";
                    }
                } else {
                    
                    rightArrow.style.opacity = "0.5";
                    rightArrow.style.pointerEvents = "none";
                }
            };

            rightArrow.addEventListener("click", () => {
                slider.scrollBy({ left: scrollStep, behavior: "smooth" });
                setTimeout(updateArrows, 500);
                console.log("scrollLeft: ", slider.scrollLeft);
                console.log("clientWidth", slider.clientWidth);
                console.log("scrollWidth", slider.scrollWidth);
            });

            leftArrow.addEventListener("click", () => {
                slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
                setTimeout(updateArrows, 500);
                console.log("scrollLeft: ", slider.scrollLeft);
                console.log("clientWidth", slider.clientWidth);
                console.log("scrollWidth", slider.scrollWidth);
            });

            updateArrows();
        });
    });
};

export default slider;