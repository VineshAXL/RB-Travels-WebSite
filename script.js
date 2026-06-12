// Hero Slider
const slides = document.querySelectorAll(".slide");

let slideIndex = 0;

setInterval(() => {

    slides[slideIndex].classList.remove("active");

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("active");

}, 4000);


// Booking Modal
const modal = document.getElementById("bookingModal");

const bookBtns = document.querySelectorAll(".book-btn");

const closeBtn = document.querySelector(".close");

bookBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        modal.style.display = "block";

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});


// Testimonials
const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

setInterval(() => {

    testimonials[testimonialIndex]
        .classList.remove("active");

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;
    }

    testimonials[testimonialIndex]
        .classList.add("active");

}, 3000);


// Scroll Animation
window.addEventListener("scroll", () => {

    document.querySelectorAll(".reveal")
        .forEach(item => {

            let top =
                item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("active");
            }

        });

});


const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});