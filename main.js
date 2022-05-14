alert('Welcome to APPLE 🍎');



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById('model')
const mobileMenu = document.getElementById('model')

function read() {
    modal.style.display = "flex";
}

function finish() {
    modal.style.display = "none";
}


const wrapper = document.getElementById('hamburger-wrapper')
const nav = document.getElementById('nav')

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open")
  nav.style.display = "flex"
})