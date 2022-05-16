


var number = window.prompt("Enter the number: ");

console.log("number is :" + number);

function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 alert("answer is :" + fibonacci(number));