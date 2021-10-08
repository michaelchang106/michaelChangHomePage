const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleLinks() {
  if (navLinks.classList.contains("hide-nav-links")) {
    //show the nav links
    navLinks.classList.remove("hide-nav-links");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";

    // transition did not work :(
    // navLinks.classList.add("transition-nav-links");
  } else {
    //hide the nav links
    navLinks.classList.add("hide-nav-links");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";

    // transition did not work :(
    // navLinks.classList.add("transition-nav-links");
  }
}

hamburger.addEventListener("click", toggleLinks);
