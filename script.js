
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 60;

  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.style.textDecoration = "underline";
    } else {
      link.style.textDecoration = "none";
    }
  });
});


console.log("ScrollMagic animations can be added here later");