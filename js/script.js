const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu navigasi di HP
menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah salah satu link dipilih
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Tahun otomatis pada footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Efek teks sederhana
const typingElement = document.getElementById("typing");
const words = [
    "Web Developer",
    "Creative Learner",
    "Future Professional"
];

let wordIndex = 0;

setInterval(function () {
    wordIndex = (wordIndex + 1) % words.length;
    typingElement.textContent = words[wordIndex];
}, 2500);