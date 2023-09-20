console.log(" ========= truthly & falsy ================")


// 5 falsy value => number, undefine, null, 0, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jhonas'))
console.log(Boolean({}))
console.log(Boolean(''));

//Normal use cases 
let valueType1 = 0;
if (valueType1) { //automatically detcts it as boolean false so goes to "else" block
    console.log("value is 10 means true")
} else {
    console.log("value is false")
}

// Equlity Operator == vs ===

let equlity = '18'; ///here is the proof how === operator actually works => its a strict operator which is mostly recommended to use in JS for good pratice
if (equlity === 18) {
    console.log("you now can drink")
} else if (equlity == 18) {
    console.log("you now can drink for sure")
}

//else if how to use it using === operator
const favourite = Number(("what's your number")); //prompt is use for to input a variable
console.log('favourite', favourite)
if (favourite === 20) {
    console.log(" you are right")
} else if (favourite === 22) {
    console.log("god damn right")
}

//using not ! operator to check conditon you can use it according to your problem
if (favourite !== 20) { console.log('why not 20') }
