// 2. Membuat Konstanta dengan const
const Yendra = 100;
console.log("Nilai Yendra :", Yendra);



// 3. Conditional Operator (Ternary)
let nilai = 75;
let hasil = nilai >= 70 ? "Lulus" : "Tidak Lulus";
console.log("Hasil:", hasil);

// 4. Short-Circuit Conditionals (&& dan ||)
let isLogin = true;
isLogin && console.log("Selamat datang!");

let username = "" || "Yendra";
console.log("Username:", username);

// 5. Arrow Function (Arrow Notation)
function tambah(a, b) {
  return a + b;
}
console.log("Fungsi biasa:", tambah(20, 80));

const kali = (a, b) => a * b;
console.log("Arrow Function:", kali(4, 25));

const sapa = nama => `Halo ${nama}!`;
console.log(sapa("Yendra"));

 const foo = "JavaScript";
    const bar = "React";

    console.log("Belajar " + foo + " dan " + bar); // Belajar JavaScript dan React
    console.log(`Belajar ${foo} dan ${bar}`); 

//Conditional Operator
        const user = "Admin";
    let result = "";

    if (user === "Admin") {
      result = "Welcome, admin";
    } else {
      result = "User not found";
    }

    console.log(result); // Welcome, admin



    //Short-Circuit Conditionals

     let user2 = "Rudi";
    let password = "qwerty";

    if ((user === "Admin") && (password === "qwerty")) {
      console.log("Welcome, admin");
    } else {
      console.log("Login gagal, periksa username/password");
    }


//Function Sebagai First-Class Citizens

     function total(a, b, cari) {
      return cari(a, b);
    }

    function tambah(x, y) {
      return x + y;
    }

    console.log(total(5, 10, tambah)); // 15    

    //Class  dan objeck
    class Laptop {
  constructor(milik, merk) {
    this.milik = milik;
    this.merk = merk;
  }

  hidupkanLaptop() {
    return `Hidupkan laptop ${this.merk} milik ${this.milik}`;
  }
}

let laptopRudi = new Laptop("Rudi", "Asus");

console.log(laptopRudi.merk);             // Asus
console.log(laptopRudi.milik);            // Rudi
console.log(laptopRudi.hidupkanLaptop()); // Hidupkan laptop Asus milik Rudi


//Memproses Object
let mahasiswa = {
  nama: "Yendra",
  umur: 17,
  jurusan: "Teknik Informatika",
  getInfo() {
    return `${this.nama} (${this.umur} tahun) dari jurusan ${this.jurusan}`;
  }
};

console.log(mahasiswa);
// {nama: "Eka", umur: 19, jurusan: "Teknik Informatika", getInfo: ƒ}

mahasiswa.umur = 17;              // ubah umur
mahasiswa.tempatLahir = "Sumba Timur"; // tambah properti baru

console.log(mahasiswa);
// {nama: "Eka", umur: 20, jurusan: "Teknik Informatika", getInfo: ƒ, tempatLahir: "Jakarta"}

console.log(mahasiswa.getInfo());
// Eka (20 tahun) dari jurusan Teknik Informatika





//Spread Operator
let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

// gabungkan arr1 dan arr2
let arr3 = [...arr1, ...arr2];
console.log(arr3); 
// [10, 20, 30, 100, 200, 300]

// tambahkan elemen baru setelah arr1
let arr4 = [...arr1, 40, 50];
console.log(arr4); 
// [10, 20, 30, 40, 50]

// tambahkan elemen baru sebelum arr1
let arr5 = [30, 40, 50, ...arr1];
console.log(arr5); 
// [30, 40, 50, 10, 20, 30]


//JavaScript Promise
const getUser = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Rudi");
        }, 2000);
      });
    };

    console.log("Start...");
    getUser().then((userName) => console.log(userName));
    console.log("Finish");

        const getUser1 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // coba ubah jadi "true" atau "false" buat test error
          const isSuccess = true; 

          if (isSuccess) {
            resolve("Rudi");
          } else {
            reject("Something wrong...");
          }
        }, 2000);
      });
    };

    const tryGetName = async () => {
      try {
        let userName = await getUser();
        console.log("✅ Success:", userName);
      } catch (error) {
        console.log("❌ Error:", error);
      }
    };

    console.log("Start...");
    tryGetName();
    console.log("Finish");