// Background Slideshow for Hero
const hero = document.getElementById("hero");
const heroImages = [
  "img/img2.jpg",
  "img/img1.jpg"
];

let heroIndex = 0;

function changeHeroBackground() {
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}

changeHeroBackground(); 
setInterval(changeHeroBackground, 3000); 





// Elemen DOM
const heroTitle = document.getElementById("heroTitle");
const userInput = document.getElementById("username");
const heroDesc = document.getElementById("heroDesc");

const titleAfter = ", WELCOME TO MY PORTFOLIO WEBSITE";
const descText = "Informatics Engineering student who is enthusiastic about web development and digital-based technologies.";

let titleIndex = 0;
let descIndex = 0;

// Fungsi update lebar box sesuai teks/placeholder
function updateWidth() {
  const text = userInput.textContent || userInput.getAttribute('data-placeholder');

  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'nowrap';
  span.style.fontWeight = 'bold';
  span.style.fontSize = window.getComputedStyle(userInput).fontSize;
  span.style.fontFamily = window.getComputedStyle(userInput).fontFamily;
  span.textContent = text;

  document.body.appendChild(span);
  const width = span.getBoundingClientRect().width;
  document.body.removeChild(span);

  userInput.style.width = `${width + 16}px`;
}

// Fungsi efek ketik judul setelah nama
function updateTitleWithTyping(name) {
  if (titleIndex <= titleAfter.length) {
    heroTitle.innerHTML = `HI <span class="editable">${name}</span>` +
      titleAfter.substring(0, titleIndex);
    titleIndex++;
    setTimeout(() => updateTitleWithTyping(name), 50);
  } else {
    heroTitle.classList.remove("typewriter");
    heroTitle.classList.add("no-caret");
    setTimeout(startDescTyping, 300);
  }
}

// Fungsi efek ketik deskripsi
function startDescTyping() {
  if (descIndex < descText.length) {
    heroDesc.textContent += descText.charAt(descIndex);
    descIndex++;
    setTimeout(startDescTyping, 25);
  }
}

// Event: deteksi Enter dan jalankan efek
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const name = userInput.innerText.trim().toUpperCase();
    if (name !== "") {
      userInput.blur();
      updateTitleWithTyping(name);
    }
  }
});

// Event: update lebar saat input/fokus/blur
userInput.addEventListener('input', updateWidth);
userInput.addEventListener('focus', updateWidth);
userInput.addEventListener('blur', updateWidth);

// Inisialisasi lebar saat load
updateWidth();



const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});




  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.navbar a').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});









