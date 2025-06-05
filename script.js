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
