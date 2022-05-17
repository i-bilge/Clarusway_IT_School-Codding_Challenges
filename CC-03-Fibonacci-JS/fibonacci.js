// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a 
// condition followed by a question mark (?), then an expression to execute if the condition is truthy 
// followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator 
// is frequently used as an alternative to an if...else statement.

var number = window.prompt("Enter the number: ");

console.log("number is :" + number);

function fibo(n) {
    if(n <= 2){
        return 1;
    }
    else {
        return fibo(n-1) + fibo(n-2);
    }
}

function fibonacci(n) {
    return  n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log("answer with ternary op. is :" + fibo(number));
 console.log("answer with if...else is :" + fibonacci(number));