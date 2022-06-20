let input = document.getElementById("inputArea");
let button = document.getElementById("convertBtn");
let output = document.getElementById("outputArea");

button.addEventListener("click", () => {
let splitStr = input.textContent.toLowerCase().split(" ");
let str;

for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();
    }

    str = splitStr.join(" ");
  }
  output.textContent = str;
});