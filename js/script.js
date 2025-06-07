// Message Display
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;
  const currentTime = new Date().toString();

  const display = document.getElementById("messageDisplay");
  display.innerHTML = `
    <p><strong>Current time :</strong> ${currentTime}</p>
    <p><strong>Nama :</strong> ${name}</p>
    <p><strong>Tanggal Lahir :</strong> ${dob}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender}</p>
    <p><strong>Pesan :</strong> ${message}</p>
  `;
});



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

changeHeroBackground(); // show first image
setInterval(changeHeroBackground, 3000); // change every 3 seconds





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
    const name = userInput.innerText.trim();
    if (name !== "") {
      userInput.blur();
      userInput.style.backgroundColor = "#d1f7c4"; // ubah warna setelah isi
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





