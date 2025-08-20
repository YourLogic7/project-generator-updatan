function tampilkanData() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const hasilDiv = document.getElementById('hasil');

  hasilDiv.innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Email: ${email}</p>
    
  `;
}
