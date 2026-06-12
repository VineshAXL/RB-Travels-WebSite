// ==========================
// Hero Slider
// ==========================

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let slideIndex = 0;

    setInterval(() => {

        slides[slideIndex].classList.remove("active");

        slideIndex = (slideIndex + 1) % slides.length;

        slides[slideIndex].classList.add("active");

    }, 2000);
}


// ==========================
// Booking Modal
// ==========================

const modal = document.getElementById("bookingModal");
const bookBtns = document.querySelectorAll(".book-btn");
const closeBtn = document.querySelector(".close");

if (modal && bookBtns.length > 0) {

    bookBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            modal.style.display = "block";

        });

    });

}

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (modal && e.target === modal) {

        modal.style.display = "none";

    }

});


// ==========================
// Testimonials Slider
// ==========================

const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {

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

}


// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = Math.ceil(target / 200);

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                if (count > target) {

                    count = target;

                }

                counter.innerText = count.toLocaleString();

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        updateCounter();

    });

};

window.addEventListener("load", startCounter);