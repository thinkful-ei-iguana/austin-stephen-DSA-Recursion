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

const reverseString = function(str) {
  if(str.length === 0) {
    return '';
  } else {
    return str[str.length - 1] + reverseString(str.substring(0, str.length -1));
  }
};

let test = 'cat';
console.log(reverseString(test));

    
   
