
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".header_container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

function validateForm() {
  // Get form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Reset error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";

  // Validate name
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    return false;
  }

  // Validate email
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    return false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    return false;
  }

  
  // Form is valid
  return true;
}

function isValidEmail(email) {
  // Simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}