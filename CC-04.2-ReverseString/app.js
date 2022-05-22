let Text = "Tamara"

// function giveReverse(s){
//     for (var i = (text.length+1); i >= 0; i--){
//         console.log(s[i]);
//     }
// }

// giveReverse(Text);

function reverse(s) {
    return s.split('').reverse().join('');
  }
  console.log("text is :", Text);
  console.log(reverse(Text));