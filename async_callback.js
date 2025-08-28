const getUser = (callback) => {
  setTimeout(() => {
    console.log("processing done!");
    callback("Rudi");
  }, 2000);
};

console.log("Start...");
getUser((nama) => {
  console.log("User:", nama);
});
