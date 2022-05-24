let Text = "Tamara"

console.log("try of 1st step :",Text.split(''));
console.log("try of 2nd step :",Text.split('').reverse());
console.log("try of 3rd step :",Text.split('').reverse().join(''));

function reverse(s) {
    return s.split('').reverse().join('');
  }
  console.log("text is :", Text);
  console.log(reverse(Text));