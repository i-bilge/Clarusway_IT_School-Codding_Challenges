/* Email validator challenge solved with 2 different patterns */

//Email to be tested
const email = "iismailbilge@gmail.com"

// 2 different patterns. They seemingly do the same. The first one is more understandable at first sight
// For references: http://zparacha.com/validate-email-address-using-javascript-regular-expression https://www.w3schools.com/jsref/jsref_obj_regexp.asp and  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// Quick overview: regex pattern goes between slashes i.e.: /[abc]/ 
// Square brackets indicate that whatever goes in them should be matched

let patternA = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ 
let patternB = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 


function ValidateEmail(mail)
    {
    // Strings have a match() method that takes a regex pattern (I think it's not the only regex method fyi)
    if (mail.match(patternA))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
    }

console.log(ValidateEmail(email));