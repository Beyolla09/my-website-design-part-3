/* Bella Bloom Florist - shared JavaScript for every page */
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "Close" : "Menu";
    });
  }

  // Basket count and product buttons (saved in this browser)
  const countElements = document.querySelectorAll(".cart-count");
  const getBasket = () => {
    try { return JSON.parse(localStorage.getItem("bellaBloomBasket") || "[]"); }
    catch { return []; }
  };
  const updateCount = () => {
    const count = getBasket().reduce((total, item) => total + item.quantity, 0);
    countElements.forEach(el => el.textContent = count);
  };
  document.querySelectorAll("[data-add-to-cart]").forEach(button => {
    button.addEventListener("click", () => {
      const basket = getBasket();
      const name = button.dataset.name;
      const existing = basket.find(item => item.name === name);
      if (existing) existing.quantity += 1;
      else basket.push({ name, quantity: 1 });
      localStorage.setItem("bellaBloomBasket", JSON.stringify(basket));
      updateCount();
      const original = button.textContent;
      button.textContent = "Added";
      window.setTimeout(() => button.textContent = original, 1200);
    });
  });
  updateCount();


  // Scroll-reveal animation (respects reduced-motion preferences)
  const revealItems = document.querySelectorAll(".section, .card, .product, .value, .info-card");
  revealItems.forEach(item => item.classList.add("reveal"));
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Client-side enquiry form validation and feedback
  const enquiryForm = document.querySelector("#enquiry-form");
  if (enquiryForm) {
    const emailField = enquiryForm.querySelector('input[type="email"]');
    const phoneField = enquiryForm.querySelector('input[type="tel"]');
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();
      const message = document.querySelector("#form-message");
      if (!enquiryForm.reportValidity()) {
        if (message) {
          message.textContent = "Please check the required fields and try again.";
          message.className = "form-message error";
        }
        return;
      }
      if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
        emailField.setCustomValidity("Please enter a valid email address.");
        emailField.reportValidity();
        emailField.setCustomValidity("");
        return;
      }
      if (phoneField && phoneField.value.replace(/\D/g, "").length < 9) {
        phoneField.setCustomValidity("Please enter a valid phone number.");
        phoneField.reportValidity();
        phoneField.setCustomValidity("");
        return;
      }
      if (message) {
        message.textContent = "Thank you! Your details passed the form checks. This demonstration form does not send data; please contact the florist directly to confirm your enquiry.";
        message.className = "form-message success";
        message.setAttribute("role", "status");
      }
      enquiryForm.reset();
    });
  }

  // Current year in footer
  document.querySelectorAll("[data-current-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});


// Open Google Maps directions to Bella Bloom Florist.
const directionsButton = document.getElementById("directionsBtn");

if (directionsButton) {
  directionsButton.addEventListener("click", function () {
    const shopAddress = "Premium Towers, Floor 5, Room 518, Pretoria, South Africa";
    const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination="
      + encodeURIComponent(shopAddress);

    window.open(mapsUrl, "_blank", "noopener");
  });
}
