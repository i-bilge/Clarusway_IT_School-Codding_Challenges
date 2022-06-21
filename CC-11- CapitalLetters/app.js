let input = document.getElementById("inputArea");
let button = document.getElementById("convertBtn");
let output = document.getElementById("outputArea");

//-----------------WAY-1-----------------------
button.addEventListener("click", () => {
  const words = input.value.split(" ");
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  output.textContent = words.join(" ");
});

//-----------------WAY-2-----------------------
// button.addEventListener("click", () => {
//   const words = input.value.split(" ");
//   output.textContent = words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
//   }).join(" ");
// });