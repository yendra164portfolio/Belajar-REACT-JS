const dataMahasiswa = () => {
  return { nama: "Eka", umur: 19, jurusan: "Teknik Informatika" };
};

let { nama, umur } = dataMahasiswa();

console.log(nama); // Eka
console.log(umur); // 19
