// Contoh module ES6
//const sayHello = (name) => {
//  return `Halo, ${name}! Selamat belajar JavaScript ES6 🎉`;
//};
//
//console.log(sayHello("Rudi"));



//import { haloMedan, haloSurabaya } from "./haloIndonesia.js";
//
//console.log(haloMedan());     // Halo Medan
//console.log(haloSurabaya());  // Halo Surabaya


// Import named + default sekaligus
import haloJakartaDefault, { haloJakarta } from "./haloJakarta.js";

console.log(haloJakarta());        // Halo Jakarta (named)
console.log(haloJakartaDefault()); // Halo Jakarta (default)
