document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initFormSubmission();
  initScrollReveal();
  initCharacterCounter();
  initDarkMode();
});


function initHeaderScroll() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.05)";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      header.style.backdropFilter = "blur(12px)";
      header.style.padding = "14px 20px";
    } else {
      header.style.boxShadow = "none";
      header.style.backgroundColor = "#ffffff";
      header.style.backdropFilter = "none";
      header.style.padding = "20px";
    }
  });
}


function initFormSubmission() {
  const form = document.querySelector("form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const userEmail = document.getElementById("user-email").value;

    console.log(`Form Submitted Successfully! Name: ${fullName}, Email: ${userEmail}`);

    showSuccessToast(`Thank you, ${fullName}! You'll receive an answer at ${userEmail}.`);
    form.reset();
  });
}


function showSuccessToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;

  Object.assign(toast.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#10b981",
    color: "#ffffff",
    padding: "16px 24px",
    borderRadius: "8px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
    fontWeight: "600",
    zIndex: "1000",
    transform: "translateY(100px)",
    opacity: "0",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  }, 50);

  setTimeout(() => {
    toast.style.transform = "translateY(30px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400); // Clean DOM completely
  }, 4000);
}


function initScrollReveal() {
  const cards = document.querySelectorAll(".features-grid article");

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "opacity 3s ease-out, transform 3s ease-out";
  });

  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        observer.unobserve(card); // Stop watching once animated
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
}


function initCharacterCounter() {
  const textarea = document.getElementById("user-message");
  if (!textarea) {
    return;
  }

  const MAX_CHARS = 200;

  const counterLabel = document.createElement("p");
  counterLabel.innerText = `0 / ${MAX_CHARS} characters`;

  Object.assign(counterLabel.style, {
    fontSize: "12px",
    color: "var(--text-muted)",
    marginTop: "4px",
    textAlign: "right",
    transition: "color 0.2s"
  });

  textarea.parentNode.appendChild(counterLabel);

  textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    counterLabel.innerText = `${currentLength} / ${MAX_CHARS} characters`;

    if (currentLength > MAX_CHARS) {
      counterLabel.style.color = "#ef4444";
      counterLabel.style.fontWeight = "bold";
      textarea.style.borderColor = "#ef4444";
    } else {
      counterLabel.style.color = "var(--text-muted)";
      counterLabel.style.fontWeight = "normal";
      textarea.style.borderColor = "";
    }
  });
}

function initDarkMode() {
  const header = document.querySelector("header");

  const themeBtn = document.createElement("button");
  themeBtn.innerText = "🌙";
  themeBtn.setAttribute("aria-label", "Toggle Dark Mode");

  Object.assign(themeBtn.style, {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    padding: "8px",
    transition: "transform 0.2s"
  });

  header.appendChild(themeBtn);

  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-theme");
    themeBtn.innerText = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    const hasDark = document.body.classList.toggle("dark-theme");

    localStorage.setItem("darkMode", hasDark ? "true" : "false");

    themeBtn.innerText = hasDark ? "☀️" : "🌙";
    themeBtn.style.transform = "scale(1.2)";
    setTimeout(() => themeBtn.style.transform = "scale(1)", 200);
  });
}