console.log(" ================== strict mode ==============")

'use strict';

// const hasdrivingLicaesence = true;
const passTest = true;

if (passTest) hasdrivingLicasence = true; // it will print an error as { hasdrivingLiasence is not defined } 
//if we did a small spell mistake in the return statement ex: hasdrivingLiasence ==> also won't run the second like as well

if (hasdrivingLicasence) console.log("hello");

console.log("============= functions =================")

function random() {
    // console.log('random function called')
    let undefindedArray = [5, 6, 7];
    // console.log('undefinded', undefinded)
    return undefindedArray //this is the return statement which returns the output (the value inside the variable )
}
random()
console.log('random() function called using console.log', random())

const valueOfFruits = fruitsValue(5, 0); //as we can declare the function before the function declared => this is because of hoisting we will study later

console.log(fruitsValue(5, 0)) //these 5, 0 are argument against the fruitsValue function parameter 
//console.log it is also a developer function ( means by default function from JS) => return vs console log is 

/////////////// function Declaration ///////////

function fruitsValue(apple, orange) { //we can call these parameter as local variable of function
    console.log(apple, orange)
    const value = (`${apple} price is too high ${orange} price is too low`) //using a variable which i can return as a function's output
    return value // here is the function's output we can return multiple output as well
}

// const valueOfFruits = fruitsValue(5, 0); // using a variable to store the function value
console.log('valueOfFruits', valueOfFruits) //printing the variable means the function return value 

//p.s In summary, "return" is used to provide a value back to the caller of a function, while "console.log()" is used for printing values to the console for debugging or logging purposes. 
//They serve different roles and are used in different contexts.

////////////////// Function expression /////////////////////

const fruitConstType = function fruitsvendor(mango, grapes) { // you can't declare the above function before the function declaration
    const types = (`${String(mango)} , ${grapes}`)
    return types
}

console.log(fruitConstType(5, "type")) // you can't declare the above function before the function declaration


const randomFunction = function (boyAge) { //we can declare a function like this without naming the function name || by using only function keyword
    // console.log(boyAge) 
    let age = boyAge;
    return age
}

const ans = randomFunction(12);
console.log(ans)

console.log("=========== Arrow Function ============")

const calcAge2 = function (birthYeah) { // Normal Function
    const age = 2081 - birthYeah;
}

const calcAge3 = birthYeah => 2091 - birthYeah; //Arrow Function => difference between traditional functions & arrow function is unable to use arrow function in this(Global stuff) => will learn later 
const check = calcAge3(1998);
console.log(check)

const calcAge4 = birthYeahTwo => { //Arrow function using multiple parameter=> that's why we use return statement => more than one line means use of return statement is necessary
    const age = 2045 - birthYeahTwo
    const retirementAge = 65 - age;
    return retirementAge //Good for using these kind scenario while writing multiple line of code 
}

console.log(calcAge4(1997))

const calcAge5 = (birthYeahTwo, person) => { //Arrow function using multiple parameter 
    const age = 2045 - birthYeahTwo
    const retirementAge = 65 - age;
    // return retirementAge
    return `${person} is getting retire on ${retirementAge}`
}
console.log(calcAge5(1995, "krushx")) //example of giving multiple 

console.log("============== Function Inside Function =============")

function marryAge(age, place) { //age value which is getting fetch from the below function is getting fetch here as a argument and doing the calculation returning the correct decesion
    let shouldYOumarry;

    if (age >= 18) {
        shouldYOumarry = "you should marry now";
    } else {
        shouldYOumarry = "you are underage";
    }
    let place1 = "third value checking";
    let fincalPlace = ` ${place} + India`; // the 2nd parameter "Place" + the new variable use for little manipulate
    return [shouldYOumarry, fincalPlace, place1]; //we can send a another return as well without taking it as parameter 
}

const calcAge45 = (birthYeahTwo, place) => {
    console.log('place', place) //output => kerla
    const age = 2045 - birthYeahTwo
    console.log('age', age)
    place = "USA" // Reassigning value as USA
    const checkMarryAge = marryAge(age, place) //here we are calling the second funciton are assigning the result => age as its parameter => and Place as USA (the reassigning value)
    console.log('checkMarryAge', checkMarryAge)
    const retirementAge = 65 - age;
    return `retirementAge Remaining ${retirementAge}`
}

console.log(calcAge45(2030, "kerla")) // assigning an second parameter

////////////////Chanllenge 2 ////////////////////////////

const calcAverage = (valueOne, valuetwo, valueThree) => {
    const averageValueRetult = (valueOne + valuetwo + valueThree) / 3
    return averageValueRetult
}

let scoreDolphins = calcAverage(44, 23, 71)
console.log('scoreDolphins', scoreDolphins)
let scoreKoalas = calcAverage(65, 54, 49)
console.log('scoreKoalas', scoreKoalas)


function checkWinner(avgDolphins, avgKoalas) {
    // let value = undefined;
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphin win (${String(avgDolphins)} vs. ${String(avgKoalas)})`)
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${String(avgKoalas)} vs. ${String(avgDolphins)})`)
    } else {
        console.log(`No teams wins .. . .`);
    }
    // return value
}

console.log(checkWinner(scoreDolphins, scoreKoalas))

scoreDolphins = calcAverage(85, 54, 41)
console.log('scoreDolphins', scoreDolphins)
scoreKoalas = calcAverage(23, 34, 27)
console.log('scoreKoalas', scoreKoalas)

console.log(checkWinner(scoreDolphins, scoreKoalas))


console.log('================= Advance Functions ======================')
console.log('================= Default Parameter ======================')

const defaultparam = function(passName, passNumber = 2 , priceTicket = 200*passNumber){
    console.log('priceTicket', priceTicket)
    console.log('passNumber', passNumber)
    console.log('passName', passName)
        
}

console.log(defaultparam('krushna',3 , 500))
