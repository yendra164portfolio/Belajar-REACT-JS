const dataMahasiswa = () => {
  return { nama: "Eka", umur: 19, jurusan: "Teknik Informatika" };
};

// kasih alias (nama baru) ke properti
let { nama: namaMhs, umur: umurMhs } = dataMahasiswa();

console.log(namaMhs); // Eka
console.log(umurMhs); // 19
