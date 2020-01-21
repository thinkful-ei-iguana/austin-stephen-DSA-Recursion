// const countingSheep = function(num) {
//   if (num === 0) {
//     console.log('All sheep jumped over the fence');
//   } else {
//     console.log(`${num}: Another sheep jumps over the fence`);
//     countingSheep(num - 1);
//   }
// };

// countingSheep(3);

// const powerCalc = function(num, exp) {
    
//     if (exp <= 0) {
//         console.log('exponent should be >= 0')
//     } else if (exp === 1) {
//          return num 
//     } else {
//         return num * powerCalc(num, exp -1)
//         }     
//     };
//     const test = powerCalc(2, 4);
//     console.log(test);

// const reverseString = function(str) {
//   if(str.length === 0) {
//     return '';
//   } else {
//     return str[str.length - 1] + reverseString(str.substring(0, str.length -1));
//   }
// };

// let test = 'cat';
// console.log(reverseString(test));

// function stringSplitter(str, char) {
//     if(!str) return []; 
//     let arr=[]; 
//     let i=0;
//     while(str[i++] !== char && i <= str.length);
//     arr.push(str.substr(0, i-1));
//     return arr.concat(stringSplitter(str.substr(i),char));
// }

// console.log('string split: ', stringSplitter('02/20/2020', '/'));

//input = 4
//output = 10
const triangularNum = function(num) {
  if (num <= 0) {
    return 'Number must be 1 or higher';
  } else if (num === 1) {
    return 1;
  } else {
    return num + triangularNum(num - 1);
  }
};

const test = 6;
console.log(triangularNum(test));