// Custom JavaScript for VisioAI Website

document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap components are automatically initialized

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form submission handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate form submission
      const formSuccess = document.getElementById("formSuccess");
      if (formSuccess) {
        // Hide form and show success message
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
      }
    });
  }

  // Add floating animation to the hero image
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    setInterval(() => {
      heroImage.style.transform = "translateY(-10px)";
      setTimeout(() => {
        heroImage.style.transform = "translateY(0)";
      }, 1000);
    }, 2000);
  }

  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll(
    ".card, .team-member, .testimonial-item"
  );

  // Check if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transition = "opacity 0.5s ease-in-out";
      fadeObserver.observe(element);
    });

    // Add the CSS rule for visible class
    const style = document.createElement("style");
    style.innerHTML = `
    .visible {
      opacity: 1 !important;
      }
      `;
    document.head.appendChild(style);
  }
});
