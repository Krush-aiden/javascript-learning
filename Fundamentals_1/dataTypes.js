// ==== DATATYPES =====  
console.log("==== DATATYPES ===== ");
/* start Using this type of comment for bigger functions */
//when we assign a variable it javascript automatically set the datatypes,

let numberValue = 5;  //Integer type variable 
let stringValue = 'alex_String';  //String type variable
let answerValue = true; //boolean type variable
let noValue; // undefine type variable 
let emptyValue = []; //null type variable 
//Null - also means empty value;
// Symbol - value that is unique & cannot be changed
// BigInt - Larger integers than the Number type can hold

//you can check the value inside the variable in the console by directly copy + pasting the variable name

// console.log(typeof numberValue); // you can check the Datatype by using this typeof operator
// datatype types are stored in the result not inside the variable
console.log(typeof noValue);  //type of the variable also undefine

console.log(typeof answerValue); // you can check the Datatype by using this typeof operator => This is an boolean type dataType
answerValue = 'Ramesh'
console.log(typeof answerValue) //we can change the datatype as well as the variable replace the new value over the old value 

console.log(typeof []); // you can check the Datatype by using this typeof operator => This is an Object type dataType
console.log(typeof null); //  null type variable is object => Its an error from legacy javaScript

