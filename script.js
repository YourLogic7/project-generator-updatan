let dataTersimpan = [];

function tampilkanData() {
  const perner = document.getElementById('perner').value;
  const dsc = document.getElementById('dsc').value;
  const insera = document.getElementById('insera').value = "";
  const headline = document.getElementById('headline').value = "";
  const pelanggan = document.getElementById('pelanggan').value = "";
  const cp = document.getElementById('cp').value = "";
  const layanan = document.getElementById('layanan').value = "";
  const resume = document.getElementById('resume').value = "";
  const alamat = document.getElementById('alamat').value = "";
  const pengecekan = document.getElementById('pengecekan').value= "";
  const jabatan = document.getElementById('jabatan').value = "";
  const respon = document.getElementById('respon').value = "";
  const carring = document.getElementById('carring').value = "";
  const jam = document.getElementById('jam').value = "";

  const hasilDiv = document.getElementById('hasil');

  // Menampilkan data yang diinputkan
  hasilDiv.innerHTML = `
    <p>${dsc} + ${insera}</p>
    <p>${perner}</p>
    <p>Nama: ${headline}</p>
    <p>Email: ${pelanggan}</p>
    
  `;
}
