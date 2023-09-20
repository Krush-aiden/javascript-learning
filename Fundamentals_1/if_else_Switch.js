console.log(" ========= if else ================")

//control flow
const ageNew = 18;
const isOldenough = ageNew >= 20
console.log('isOldenough', isOldenough)
console.log('!=>isOldenough', !isOldenough)


let value; //Declare a variable like this will able to set an value inside the if else block and can use it further as well
if (isOldenough) {
    value = 25;
    console.log("yes you are eligible to drink 🙌")
} else {
    value = 35
    let value3 = 50
    console.log("no she is not old enough to drink")
}
// console.log('value3', value3) ===> // wont be able to access the value as they are defined inside the else block || even if block

console.log("value", value) //using value inside if else 

//this if else we called as control structure as we are able to control one block wheather its only if or else statement


console.log("============ Switch ================")

const day = 'monday';

let str;
switch (day) { //the switch case it self is an statement which does ot produce any value 
    case 'monday':
        console.log("monday")
        str = "monday"; //but this is an expression creates an value
        break;
    case 'Tuesday':
        console.log("tuesday")
        break;
    case 'thrusday':
        console.log("thrusday")
        break;
    case 'friday':
    case 'saturday':
        console.log("friday || saturday")
        break;
    default:
        console.log("default")
        break
}


console.log("========= statemene && literals ===============")

20 + 30
1981
true && false && !true //all these are are expression because they produce some value 

//check up for better understanding 

console.log(`its an template literal ${str}`) //it's can expression inside a template literal statement 

console.log("============== conditional operator/ Ternary operator==============")

let ageMore = 25
ageMore >= 20 ? console.log("yes its greater than 20 😊") : console.log("not its not greater than 20 😒");

const valueMore = ageMore >= 22 ? 'water' : 'wine';
console.log('valueMore', valueMore)

//we can use this ternary operator inside the template literal as well => as it is an expression and creates a value 

console.log(`the value of template literals ${ageMore >= 22 ? 'water' : 'wine'}`);

// const billvalue = 415;
// let tip; //x

// if (billvalue <= 300 && billvalue >= 50) {
//     tip = (15 / 100) * billvalue
//     console.log('tip', tip)
// } else {
//     tip = (20 / 100) * billvalue
//     console.log('tip', tip)
// }

const bill = 430;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
