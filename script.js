
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

function toggleForm() {
  const form = document.getElementById("portfolioForm");
  form.style.display = (form.style.display === "none") ? "block" : "none";
}


const nameInput = document.getElementById("userName");
if (nameInput) {
  nameInput.addEventListener("input", function() {
    document.getElementById("previewName").textContent = this.value || "-";
  });
}

function addPortfolioSkill() {
  const skillInput = document.getElementById("userSkill");
  const skill = skillInput.value.trim();

  if (skill !== "") {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("previewSkills").appendChild(li);
    skillInput.value = "";
  }
}


console.log("ScrollMagic animations can be added here later!");