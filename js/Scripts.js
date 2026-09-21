function myFunction() {
  var intro = document.getElementById("hide");
  var site = document.getElementById("myDIV");

  if (intro.classList.contains("glitching") || intro.classList.contains("tv-bg")) {
    return;
  }

  // play the TV glitch transition, then turn the intro into the site's
  // fullscreen background (instead of hiding it) and reveal the site
  intro.classList.add("glitching");

  window.setTimeout(function () {
    intro.classList.remove("glitching");
    intro.classList.add("tv-bg");
    site.style.display = "block";
  }, 620);
}

function toggleMenu() {
  var nav = document.querySelector("nav");
  var links = document.getElementById("navLinks");
  var burger = document.getElementById("burger");
  var isOpen = links.classList.toggle("open");
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  var nav = document.querySelector("nav");
  var links = document.getElementById("navLinks");
  var burger = document.getElementById("burger");
  links.classList.remove("open");
  burger.classList.remove("open");
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}