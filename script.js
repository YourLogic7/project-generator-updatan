let dataTersimpan = [];

function tampilkanData() {
  const perner = document.getElementById('perner').value;
  const dsc = document.getElementById('dsc').value;
  const insera = document.getElementById('insera').value;
  const headline = document.getElementById('headline').value;
  const pelanggan = document.getElementById('pelanggan').value;
  const cp = document.getElementById('cp').value;
  const layanan = document.getElementById('layanan').value;
  const resume = document.getElementById('resume').value;
  const alamat = document.getElementById('alamat').value;
  const pengecekan = document.getElementById('pengecekan').value;
  const jabatan = document.getElementById('jabatan').value;
  const carring = document.getElementById('carring').value;
  const jam = document.getElementById('jam').value;
  const nok = document.getElementById('nok').value;
  const textbox = document.getElementById("textboxSaya").value
  const ok = document.getElementById('ok').value;

  // buat reset form
  document.getElementById("dsc").value = "";
  document.getElementById('insera').value = "";
  document.getElementById('headline').value = "";
  document.getElementById('pelanggan').value = "";
  document.getElementById('cp').value = "";
  document.getElementById('layanan').value = "";
  document.getElementById('resume').value = "";
  document.getElementById('alamat').value = "";
  document.getElementById('pengecekan').value= "";
  document.getElementById('jabatan').value = "";
  document.getElementById('carring').value = "";
  document.getElementById('jam').value = "";
  document.getElementById("textboxSaya").value = "";
  document.getElementById('ok').value = "";

 
  
  
  // menampilkan hasil ini mah
  const hasilDiv = document.getElementById('hasil');

  
  // Menampilkan data yang diinputkan
  hasilDiv.innerHTML = `
    <p>${dsc} ${insera}</p>
    <p>${perner} / C4 Area / ${jabatan} / Hasil Cek: ${pengecekan}</p>
  `;
}


// untuk menampilkan texbox sesuai pilihan radio button
function tampilkanTextbox() {
    const textbox = document.getElementById("textboxSaya");
    textbox.style.display = "block"; // Tampilkan textbox
}

function sembunyikanTextbox() {
    const textbox = document.getElementById("textboxSaya");
    textbox.style.display = "none"; // Sembunyikan textbox
}