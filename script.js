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
  let pilihanNok = document.querySelector('input[name="nok"]:checked');
  let pilihanOk = document.querySelector('input[name="ok"]:checked');
  const carring = document.getElementById('carring').value;
  const jam = document.getElementById('jam').value;

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
  document.getElementById('respon').value = "";
  document.getElementById('carring').value = "";
  document.getElementById('jam').value = "";

  // menampilkan hasil ini mah
  const hasilDiv = document.getElementById('hasil');

  
  // Menampilkan data yang diinputkan
  hasilDiv.innerHTML = `
    <p>${dsc} ${insera}</p>
    <p>${perner} / C4 Area / ${jabatan} / Hasil Cek: ${pengecekan}</p>
  
  `;
}
