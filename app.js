// SMOOTH SCROLLING FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// DYNAMIC YEAR IN FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// ANIMATION ON SCROLL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ADD 'visible' CLASS TO CSS FOR ANIMATIONS
const style = document.createElement("style");
style.innerHTML = `
  section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// SIMPLE TESTIMONIAL SLIDER (EXAMPLE)
// For a real project, a library like Swiper.js would be more robust.
const testimonials = [
  {
    quote:
      "CoffeeConnect transformed our social media presence. Their creativity and dedication are unmatched!",
    author: "Jessica Lee, CEO of a Cool Brand",
  },
  {
    quote:
      "Working with CoffeeConnect was a game-changer. They are true experts in their field.",
    author: "John Smith, Marketing Director",
  },
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector(".testimonial");

function showTestimonial() {
  if (testimonialContainer) {
    const testimonial = testimonials[currentTestimonial];
    testimonialContainer.innerHTML = `
      <p>"${testimonial.quote}"</p>
      <h4>- ${testimonial.author}</h4>
    `;
  }
}

// Auto-play slider
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial();
}, 5000);

// Show the first testimonial initially
showTestimonial();

// PORTFOLIO PAGE FILTERING
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

if (filterButtons.length > 0 && portfolioCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Set active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter cards
      const filter = button.dataset.filter;
      portfolioCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
