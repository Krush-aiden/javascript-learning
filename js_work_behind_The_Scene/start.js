// import _ from 'lodash.js';
// ============== High Level 
//js is  a high level language => developer do not need to manage resources
//other language like c & c ++ are low level language => means can directly intaract with cpu & memory => developer need to manage resources

// ============ garbage collector
// Js have a cleaning guy who cleans all the memory time to time so that you don't have to clean the memoery by yourself 

// ========== interpreted or just in time compiled
// computer only understand 0 & 1 => but in js we have an abstraction to write code for this like using variable & datatypes 
// which gets convert to machine code by getting compiled => this happens inside the JS engine

// =========== Multi paradgime
//paradgime : an approach and mindset of structure code which will direct your coding style & technique.

// Procedural programming => currently Learning
// Object oriented programming
// Functional programming => Mostly used

// ========== Prototype based Object oriented 
// 

//=========== First Class function
// close clisemodal(){
    // modal.classlist(/btn-new).add('hidden)
// }

// overlay.addeventlistner('click', closeModal); => //passing a function into another function as an argument, First-Class Function 


// ==========Dynamic
// let x =23;
// let y = 25;
// x = 'Jhon' => // js automatically change Datatype dynamically 

// ================ Single threaded ================ Non Blocking Event loop ======================

// ==> concurrency Model = how js handle multiple tasks happening at the same time => why do we need that 👇
// ==> Javscript runs in one single thread so it can do one thing at a single time  👇=> what about a long running task 
// ==> sounds like it would block the single threaded but we want non blocking behaviour! 👇 => how do we achive that

// ==> by using a "event loop" takes long running task executes them in the "background" and puts them back in the main thread once they are finshed 

// 'use strict' 

console.log("============ scoping ================")

const name = 'jhon' //Global declare

function calcAge (birthYear){
    const age = 2023 - birthYear;
    const name = 'harish' //this is going to be print as it is inside the function so it will considered as priority according to the scoping

    const output = ` my name is ${name} & I am ${age} yr old, & my birthyear is ${birthYear}` //we can access the name variable from the global declare
    console.log('output', output)

    function allDetails(){
    
    const output = 'new output'
    const name ='ramesh' // ramesh is going to be print as name as it is declared inside the parent function, so it will be considered as first priority
    console.log(output) //this one is getting the value from its child function which is all Details=> it won't access the parentScope output value
    
    if(birthYear > 1986){
        var millenial = true;
        let genZ = true
        const proof = ` you are millenial`
        function add (a, b){ //while using "strict mode" we can't access the function outside this if block, if we remove the strict mode then we can
            return a + b;
        }
    console.log(add(2,4)) //Here we are calling the function inside the block statement

    }
      // console.log(add(2,4)) //Here we are calling the function outside the block statement
      console.log(millenial) // but we can only access the var type from the block scope
      // console.log(genZ) // we can't access the let type from the block scope
      // console.log(proof) // we can't access the const type from the block scope
}
console.log('output', output) //this one getting the value from the parent scope
  
    allDetails()
    return age
}

const value = calcAge(1997)
console.log('value', value)
// console.log(name)
// console.log(age) //we won't be able to access the age variable as it is declared inside the function

console.log("================= Hoisting ==================")

// console.log(address) //Output : as you cannot access it before initilazation
// console.log(newName) //Output : undefined as it is var type
// console.log(year) //outPut : as you cannot access it before initilazation

let newName = 'krushna';
var address = 'bbsr'
const year = 1997;


// console.log(arrowType(2,3)) // as it is a var type it won't conside it as a function, so it's not saved inside the TDZ

 console.log(declar(2,3)) //  output: 5 =>  we can access the functione before initilazation as its a declaration Type function
// console.log(addExpression(2,3))  // output: as you cannot access it before initilazation



function declar (a, b){
    return a + b
}

const addExpression = function(b,c){
    return b+c
}

var arrowType = (a,b) => a+b;

//==================== demerit of using hoisting while using Var variable ===================

console.log('numpads', numpads) // it will give output as undefined as it is a var type => so undefined means false & it will make the below condition true & will turns out to be an wrong logic
if(!numpads) deleteAllProduct()
console.log('numpads', numpads)

var numpads = 10; 
console.log('numpads', numpads)

function deleteAllProduct(){
    console.log("deleted all product")
}

// ================= Windows ; keyword in JS ===================
let x = 7;
var y = 8; //Only var type can create property inside the windows keyword other's can't 
const z = 10;

console.log(x === window.x)
console.log(y === window.y) // as the y is var type & it has created a property inside the windows keyword


console.log("===================== `this` Keyword ========================")

const agecalc = function(birthYear){
    console.log(2023 - birthYear)
    console.log(this) //output as undefined => it is the "this" keyword of its function
}

console.log(agecalc(1997))

var number =5

//this inside arrow function
const arrowCheck = (birthYear) => {
// number =7
var number =5 //we can see this value inside the "this" as it is declared as var type
    console.log(2023 - birthYear)
    console.log(this) //this keyword is the global this keyword => we can get the output as well
}

console.log(arrowCheck(1998))

//function inside Object 
const jhonas = {
    year : 1981,
    name : 'krushna',
    calc: function(){
        console.log(this) // output we can access this 'this' as it is declared inside the object
        console.log(2037 - this.year)
    }
}

const matila = {
    year:2017,
    year2 : 1999,
};

matila.calcAge = jhonas.calc
matila.calcAge()
console.log(jhonas.calc())

const f = jhonas.calc;
// f() //output error calling this inside the "calc" function => as it is a regular function we won't get the 'this' value

console.log("=============== Regular Function vs Arrow Function {how the 'this' keyword works according to the specific functions} =======================")

var nameTwo = 'alex'

const jhon = {
    year : 1981,
    name : 'krushna',

    calc: function(){ //this is a declared type function
        console.log(this) // output we can access this 'this' as it is declared inside the object
        console.log(2037 - this.year)

        // SOlution 1
        // const stat = this // we are assigning here the "this" keyword value to "stat" variable => so that we can use it inside the regular expression function
        // const checkfun = function(){
        //     console.log(stat) // Here we are using the above declare "this" keyword value as variable "stat"
        //     console.log(`${2023 - stat.year} && ${stat.name}`)
        // }
        // checkfun()

        //solution 2
        const arrowFunctt = (value) => {
            console.log(this)
            console.log('Inside arrow age', 2023 - this.year)
        }
        arrowFunctt()
    },

     greet : (value) => {
        console.log('hello',value = 20)
        console.log('this', this.nameTwo)
    }

};

console.log(jhon.calc())

console.log(jhon.greet())

console.log("==================== Argument keyword =====================")
// => it only supports function declaration type & expression Type => There is a mordern way to deal with this argument keyword => but still its good to know about this

const functionThree = function(a,b){
    console.log(arguments) // we can take multiple arguments as we can here from the below console log, 
        return a + b
}

console.log(functionThree(2,3,5,6))

// const arrowThree = (a,b) => {
//             console.log(arguments) // we can't access a argument keyword inside a arrow function 
//             return a+b
// }

// console.log(arrowThree(2,3))


console.log("================== premetive & Objects ==================")

//primitives Types
let age = 20 //value is stored in the memory 0001 
let oldage = age; //here we are assigning the memoery 001 value to the oldage variable 
oldage = age
age = 25 //here value is stored in the new memoery 0002
console.log(age)
console.log(oldage)
console.log(oldage)


//Referance Type
const preeti = {
    firstname : "preeti",
    lastname : "sahu",
    year : 1998
}
const marriedPreeti = preeti
marriedPreeti.lastname = "mahapatra"

console.log(preeti) //we will get the same lastname as it is point to the same referance memoery address => the value gets changes inside the preeti as it is in the heap 
console.log(marriedPreeti)

// marriedPreeti = {} => it won't work as it is declared as const type

//copying Objects
// Object.address()

// _chunk()

const palluBeforeMarriage = {
    firstname :'pallu',
    lastname : 'Mohapatra',
    year : 1998,
    family : ['ramesh', 'suresh']
}

// console.log(_)

const palluAftermarriage = Object.assign({}, palluBeforeMarriage); // this object assigne helps to create a copy of "pallu" object property inside the pally "aftermarriage" variable
palluAftermarriage.lastname = 'mahapatra'
palluAftermarriage.family.push ("rajesh") 
//Note => //we use _cloneDeep also to change the value inside an array


console.log(palluBeforeMarriage) // here you can see the output here as old object as : "Mohapatra"
console.log(palluAftermarriage) //now you can see output :  the last he here as "mahapatra"



