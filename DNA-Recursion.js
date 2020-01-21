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
// const triangularNum = function(num) {
//   if (num <= 0) {
//     return 'Number must be 1 or higher';
//   } else if (num === 1) {
//     return 1;
//   } else {
//     return num + triangularNum(num - 1);
//   }
// };

// const test = 6;
// console.log(triangularNum(test));


// function fib(n) {
//     if (n === 1 ) {
//         return [0, 1];
//     } else {
//         let series = fib(n-1);
//         series.push(series[series.length -1] + 
//         series[series.length -2]);
//         return series
//     }
// }

// console.log(fib(7))

//input= 5
//output= 120

// const getFactorial = function(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * getFactorial(num - 1);
//   }
// };

// const test = getFactorial(5);
// console.log(test);

// let maze = [["", "", "*"],
//             ["*", "", "*"],
//             ["", "", "e"]]

// let solveMaze = function(maze, row, column, path) {
//     if (maze[row][column] === "e") {
//         return path;
//     }

//     if(maze[row] [column] === "*" || column > maze.length || row > maze.length || column < 0 || row < 0) {
//         return false;
//     }

//     if(maze[row] [column] === "") {
//         if (maze[row] [column + 1] === "") {
//             return "R" + solveMaze(maze, row, column++, path)
//         } else if (maze[row] [column -1] === "") {
//             return "L" + solveMaze(maze, row, --column)
//         } else if (maze[row - 1] [column] === "") {
//             return "U" + solveMaze(maze, --row, column)
//         } else if (maze[row + 1] [column] === "") {
//             return "D" + solveMaze(maze, row++, column)
//         }
//     }
//     console.log(path)
//     return path;
// }

// console.log('solvemaze:', (solveMaze(maze, 0, 0, [])))


// function findPerms(str) {
//     if (str.length === 1) return [str]
    
//     let all = []
//     for (let i = 0; i < str.length; i++) {
//       const currentLetter = str[i]
      
//       const remainingLetters = str.slice(0,i) + str.slice(i+1)
//       const permsOfRemainingLetters = findPerms(remainingLetters)
      
//       permsOfRemainingLetters.forEach(subPerm => {
//         all.push(currentLetter + subPerm)    
//       })  
//     }
//     return all
//   }
  
//   console.log("permutations: ", findPerms("jim"))


function binaryRep(num) {
    if(num<=0) {
        return ''
    }
    const binary = num % 2;
    return binaryRep(Math.floor(num/2)) + binary
}