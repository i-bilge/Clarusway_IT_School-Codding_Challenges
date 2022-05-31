let arrFirst = [0,1,2,3,4,5];
let arrSecond = [6,7,8,9,10];

const mergeArrays = (arr1, arr2) => arr1.concat(arr2);

console.log("mergeArray is: ", mergeArrays(arrFirst, arrSecond));

console.log(...arrFirst,...arrSecond);
const mergedArray = [...arrFirst,...arrSecond];
console.log(mergedArray);

var oneArray = [];

for (let i = 0; i < 11; i++) {
  
  oneArray.push(Math.floor(Math.random() * 100));
  
}
var anotherArray = [];

for (let i = 0; i < 11; i++) {
  
  anotherArray.push(Math.floor(Math.random() * 100));
  
}


console.log( Boolean(oneArray));
console.log( Boolean(anotherArray));


function arrayer (arr1, arr2) {

    if (!arr1.length || !arr2.length ) {

        return "One of your arrays is empty";

    } else {

        const arrayed = [...arr1, ...arr2]

    let temp;

    for (let i = 0; i < arrayed.length; i++) {


        for (let j = i + 1; j < arrayed.length -1; j++) {
          
          
          if (arrayed[i] > arrayed[j]) {
            
            temp = arrayed[i];
            arrayed[i] = arrayed[j];
            arrayed[j] = temp;
            
          }
          
        }
        
      }

      return arrayed;


    }

    

}

console.log(arrayer(oneArray, anotherArray));