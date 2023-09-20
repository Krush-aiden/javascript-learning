console.log("======== basic Operator =============")
//Math operator
const now = 20;
const jhonas = now + 1987;
const ranju = 1988 - now;

console.log('jhonas, ranju', jhonas, ranju)

console.log('jhonas, ranju', jhonas * 2, ranju / 2, 2 ** 4); //basic Math operator => ** means exponential operator (2 to the power 4)

//Concatination of two strings 
const string1 = "krushna";
const string2 = 'mahapatra'

console.log(string1 + ' ' + string2) // concatination of two strings using space in between 
// we can do it in better way named as template strings but will do it later 

// Assignment Operator
let add = 10 + 5; //value will be 15
add += 10 // here reassigning the add by adding 10 as value 
console.log(add) //value will be 15+10 = 25
add *= 5; // multiplying with 5 now valuew will be = 25* 5 = 125
console.log('add', add)
add /= 25; //dividing the 125 value with 25 = 5
console.log('add', add)
add++;
console.log('add', add)
add--;

//Comparision Operator
console.log(jhonas > ranju); //jhonas age is 2007 & ranju is 1968 so it will be true value 
console.log(jhonas >= 2225); //2225 is greater than 2007 so it will be false //in Real world development we would like to keep these value in variables for future use 
// console have access to all the variable what you write in the ide 

// operator Precedence  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence //precedence Table
console.log(jhonas - now > ranju + now); //2007 - 20 = 1987 > 1968 + 20 = 1988 as ranju age is greater than 1987(jhonas so it will be a false value)

let x, y;
x = y = 20 - 10 - 5; //first it will exceute the 20-15-10 (according to the precedence Table which will go from left to right) 
//Then it will check the x = y which will start assigning from right to left
console.log(x, y)

const averageAge = (jhonas + ranju) / 2; //by adding () bracket operator is higher precedence oder compare to divide or any mathmatical operator 
console.log('averageAge', averageAge)

//Chanllenge No 1
const massmark = 78;
const heightMark = 1.69; //meter

const massJhon = 92;
const heightJhon = 1.95;

const BMImark = massmark / (heightMark ** 2); // using expentional methor
const BMIJhon = massJhon / (heightJhon * heightJhon);
console.log('BMIJhon', BMIJhon)
console.log('BMImark', BMImark)

const markHigherBMI = (BMImark > BMIJhon);
console.log('markHigherBMI', markHigherBMI)