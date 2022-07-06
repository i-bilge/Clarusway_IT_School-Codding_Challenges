let nums = [1,3,-1,-3,5,3,6,7], k = 5;

let maxValueArr = [];
for (let i = 0; i < nums.length-k+1; i++) {
    let subArr = nums.slice(i,i+k);
    console.log(subArr);
    let maxValue = Math.max(...subArr);
    maxValueArr.push(maxValue);
}
console.log(maxValueArr);