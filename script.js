document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let slideInterval;

    // Function to show the current slide based on index
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active"); 
                slide.style.display = "flex"; 
            } else {
                slide.classList.remove("active"); 
                slide.style.display = "none"; 
            }
        });

       
        updateNavigation();
    }

    // Function to go to the next slide, looping back to the first slide from the last
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide += 1;
        } else {
            currentSlide = 0; 
        }
        showSlide(currentSlide);
    }

    // Function to go to the previous slide but ensure it doesn't loop back from slide 1 to slide 3
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide -= 1;
        }
        showSlide(currentSlide);
    }

    // Function to update the navigation buttons based on the current slide
    function updateNavigation() {
        const nextButton = document.querySelector(".next");
        const prevButton = document.querySelector(".prev");

        if (currentSlide === 0) {
            prevButton.style.display = "none"; 
            nextButton.style.display = "inline-block"; 
        } else if (currentSlide === totalSlides - 1) {
            nextButton.style.display = "inline-block"; 
            prevButton.style.display = "inline-block"; 
        } else {
            nextButton.style.display = "inline-block"; 
            prevButton.style.display = "inline-block";
        }
    }

    // Start auto-slide with a specific interval
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 2000); 
    }

    // Stop auto-slide
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Reset auto-slide on manual navigation
    function resetAutoSlide() {
        stopAutoSlide(); 
        nextSlide();
        startAutoSlide(); 
    }

    // Select the navigation buttons
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    // Attach event listeners to the navigation buttons
    if (nextButton && prevButton) {
        nextButton.addEventListener("click", () => {
            resetAutoSlide();
        });

        prevButton.addEventListener("click", () => {
            stopAutoSlide(); 
            prevSlide();
            startAutoSlide(); 
        });
    } else {
        console.error("Navigation buttons not found.");
    }

    // Initialize the slideshow
    showSlide(currentSlide); 
    startAutoSlide(); 
});
