// contoh destructuring dengan default value
const dataMahasiswa = () => {
  return { nama: "Eka", umur: 19 };
};

// alamat tidak ada di object → pakai default "Jakarta"
let { nama, umur, alamat = "Jakarta" } = dataMahasiswa();

console.log(nama);   // Eka
console.log(umur);   // 19
console.log(alamat); // Jakarta
