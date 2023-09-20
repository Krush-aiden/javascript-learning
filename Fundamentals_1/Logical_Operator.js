console.log("====== Logical Operator ==============")

//example 
// Age = 16
// A: Age is greater than or equal to 20  => false
// B Age is less than 30 => true 

//!A = false => true opposite false
//A & B = false => if one value is false then result will be false
//A || B = true => if one value is true so 
//!A(false) & B = true => as both are false so 
// A ||!B = false => this is the only way a or operator can be false 

const isGood = true; //A
const notSoGood = true; //B
const tryit = false

console.log(isGood || notSoGood) // true
console.log(!isGood && notSoGood) //false
console.log(!isGood) //false
console.log(!isGood || notSoGood) //true
console.log(!isGood || notSoGood && !tryit) //true

const scoreDolphins = (96 + 108 + 89) / 3;
const scorekoalas = (88 + 91 + 110) / 3;

if (scoreDolphins < scorekoalas) {
    console.log('koalas win the trophy')
} else if (scoreDolphins > scorekoalas) {
    console.log('Dolphins win the trophy')
} else if (scoreDolphins === scorekoalas) {
    console.log('both win the trophy')
}


