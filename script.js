let dataTersimpan = [];

// untuk menampilkan texbox sesuai pilihan radio button
document.addEventListener('DOMContentLoaded', function() {
    //event listener untuk mendeteksi perubahan radio button
    const radioBiasa = document.getElementById('radioBiasa');
    const radioTextbox = document.getElementById('radioTextbox');
    const textboxContainer = document.getElementById('textboxContainer');
    
    radioBiasa.addEventListener('change', function() {
        if (this.checked) {
            textboxContainer.style.display = 'none';
        }
    });

    radioTextbox.addEventListener('change', function() {
        if (this.checked) {
            textboxContainer.style.display = 'block';
        }
    });
});




// fungsi untuk menampilkan data
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
  const inputUser = document.getElementById('inputUser');
  const radioBiasa = document.getElementById('radioBiasa');
  const radioTextbox = document.getElementById('radioTextbox');

  
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


  // menampilkan hasil ini mah
  const hasilP = document.getElementById('hasil-texbox');
  const hasilDiv = document.getElementById('hasil-dsc');
  const hasilI = document.getElementById('hasil-insera');
  
  // untuk menampilkan data dari textbox jika radio button dipilih
    if (radioBiasa.checked) {
      hasilP.textContent = "Menunggu info lebih lanjut.";
      } else if (radioTextbox.checked) {
      if (inputUser.value.trim() === '') {
          hasilP.textContent = "ISI INFORMASI SOLVERNYA!";
      } else {
          hasilP.textContent = `${inputUser.value}`;
      }
    };  

  // Menampilkan data untuk update DSC
 
   hasilDiv.innerHTML = `
    <p>${dsc} ${insera}</p>
    <p>${perner} / C4 Area / ${jabatan} / Hasil Cek: ${pengecekan}</p>
    <p>Sudah dikordinasikan dengan ${jabatan} ${hasilP.textContent}</p>
  `;

  // Menampilkan data untuk update Insera

  hasilI.innerHTML = `
    <p>${headline}</p>
    <p>Nama Pelanggan / CP: ${pelanggan} ${cp}</p>
    <p>No. Tiket/ No Layanan: ${insera} ${insera} / ${layanan}</p>
    <p>Resume Case: ${resume}</p>
    <p>Alamat Instalasi: ${alamat}</p>
    <p></p>
    <p>Hasil Pengecekan:</p>
    <p>-Cek: ${pengecekan}</p>
    <p></p>
    <p>Sudah dikordinasikan dengan ${jabatan} ${hasilP.textContent}</p>
    <p></p>
    <p>Hasil Carring: ${carring}</p>
    <p>Jam Carring: ${jam}</p>
    <p></p>
    <p>Demikian informasinya</p>
    <p>Terima kasih.</p>
  `;
}

