console.log("=========== Arrays ================")

const arrayOne = ["Ramesh", 'suresh', 'padmesh'] // Tradational way of declaring an Array
console.log('arrayOne', arrayOne)

const arraytwo = new Array("bikash", "ajit", "sagar"); // Declare a array in new way
console.log('arraytwo', arraytwo)

console.log(arraytwo[arraytwo.length - 3])


arraytwo[0] = "newZero"
arraytwo[1] = "newone"
arraytwo[2] = "harish"; //can replace the value of array as well
arraytwo[3] = "zeuss" //we can add a new element to the arrya in this way as well 
//we can replace the whole array like this 
// arraytwo = ['kitty', 'pihu'] => but can't replace the while array like this
console.log('arraytwo', arraytwo)

firstname = "krushna"
const arrayThree = new Array(firstname, "mahapatra", 2023 - 1997, "My friends are -", arrayOne); //we can write array like this 
// => another array can be stored  Inside an array 
console.log(arrayThree.flat()) //using array flat method helps to merge the "arrayOne" array with "arrayThree" array as all in one  array



const birthYearOne = birthYear => (2023 - birthYear);

const arrayNumbers = [1998, 1997, 1995, 1992];

const checkArray = birthYearOne(arrayNumbers[2])
console.log(checkArray)

// for (index = 0, index < arrayNumbers.length, index++) {

// }

// Add Elements 
const friends = ["alex", "zeus", "cobal", "titus"];
const newfriend = "rakesh"
const newLength = friends.push(newfriend); //Push method is used to add a new value to the array
console.log(friends)
console.log(newLength);

friends.unshift("bijaya", "ajaya"); //this unshift is use to add the value from the top of the array
console.log(friends)

//Remove Element
const pop = friends.pop() //removes the last element
console.log(pop)
console.log(friends)
const pop2 = friends.shift() //removes the first element
console.log(pop2)
console.log(friends)

const indexSave = friends.indexOf("alex"); //here we are finding the index of "alex" inside the friends array
console.log('indexSave', indexSave)
const sliceOne = friends.slice(1)
console.log('sliceOne', sliceOne) //is removew now from the array by using slice method from above as you can see
console.log('friends', friends)


friends.push(23)
const includeCheck = friends.includes("alex"); //this includes method returns a boolean value if the value is present of not 
console.log('includeCheck', includeCheck)
console.log(friends.includes('23')) //it will show result as false the value is defined as number above and here is the chcecking as a string so


//Array challenge #2
function calcTip(bills) {
    let billvalu
    if (bills >= 50 && bills <= 300) {
        billvalu = (15 / 100) * bills;
    } else {
        billvalu = (20 / 100) * bills;
    }
    return billvalu
}

const bills = [125, 555, 44];
// const billValue1 = calcTip(bills[0]);
// const billValue2 = calcTip(bills[1]);
// const billValue3 = calcTip(bills[2]);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log('tips', tips)
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log('totals', totals)


console.log("====================== Dot Notion ========================")
const arrayOneMore = [
    "Rakesh",
    1998,
    "carpenter",
    ["yuri", "cozi", "buzy"]
]
console.log('arrayOneMore', arrayOneMore) //we use array for more order data

const objectOne = {
    firstname: "krushna",
    lastname: "mahapatra",
    job: "engineer",
    birth: 1997,
    friends: ["yuri", "cozi", "buzy"], //declaring a array inside the object
    hasDriverLicense: true,

    birthdate: function () { //Declared the function as a property = > by giving the name as birthdate
        console.log("this", this)
        const age = 2023 - this.birth; //this function helps to calculare the age and return it
        // let checkdriverlicense
        // if (this.hasDriverLicense) {
        //     checkdriverlicense = "he has a driver license";
        // } else {
        //     checkdriverlicense = "he doesn't have a driver license";
        // }
        let checkdriverlicense = this.hasDriverLicense ? "he has a driver license" : "he doesn't have a driver license";
        return [age, checkdriverlicense]
    }
};
console.log('objectOne', objectOne) //we use object for more unStructured Data

const ageOne = objectOne.birthdate(); //calling the function which is declared inside the objectOne object
console.log('ageOne', ageOne) //it will return the calculated age value 
console.log(`${objectOne.firstname} is a ${ageOne[0]} ${objectOne.job} & ${ageOne[1]}`);

const keyName = "name";

console.log(objectOne[["first" + keyName]])
console.log(objectOne[["last" + keyName]])
//console.log(objectOne."first" + keyName); // we cannot use . notion & write like this while using objects

// const interestedKnowing = prompt("what you want to know about me job, age , DOB, friends"); //prompt is use to prompt something on the screen
// console.log(objectOne[interestedKnowing]) //we will use console.log like this to utilize the prompt function & to get any value of the use like this

// const works = "false";
// if (works = "true") {
//     if (objectOne[interestedKnowing]) {
//         console.log(objectOne[interestedKnowing])
//     } else {
//         console.log("wrong input")
//     }
// }

console.log(objectOne.firstname)// we can get a value from an object like this as well

// how to add new properties to the object by using dot & bracket notion 
objectOne.location = "bhubaneswar";
objectOne["insta"] = "krushX"; //we can add properties in this way as well
console.log(objectOne)

console.log(`${objectOne.firstname} has ${objectOne.friends.length} friends & ${objectOne.friends[0]} is his bestie`)

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}



const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}
console.log(mark)
console.log(mark.bmi) //it will show undefined as the bmi is not getting set inside the object => as we are not calling the function before calling it
mark.calcBMI() //here we call the function to set the calculated value in the mark object
john.calcBMI()
console.log(mark.bmi) //now we can see the value

if (mark.bmi > john.bmi) {
    console.log(`Mark Miller's BMI ${mark.bmi} is higher than John Smith's BMI ${john.bmi}!`)
} else {
    console.log(`John Smith's BMI ${john.bmi} is higher than mark Miller'sBMI ${mark.bmi}!`)
}

// ================================================== FOR loop =========================>>>>>>>>>>>>
console.log("================ FOR Loopsssssssss ====================")


function calcAgeTwo(blankArray) {
    const ageAll = 2023 - blankArray;
    return ageAll
}


let blankArray = [] //we call this as an empty Array;
const newArrayLoop = [
    1997,
    1998,
    1999,
    "krushna",
    ["ramesh", 2003],  //=> an array inside an array => it will be considered as an object => while console.log(typeof) 
    2001,
    true
]
console.log(newArrayLoop.length) //output will be 5 because 0,1,2,3,4 => total 5 element => newArraylopp[5] => there is not value present => we will use (length-1) => newwArrayLoop[4] as last value 
const flatType = newArrayLoop.flat()
console.log('flatType', flatType) // IT contains all the value inside the new Array in a merge format
let storeAge = []
let ages = []
// ===========================  this is how you loop an array from 0 => NORMAL LOOOPING ===========================
for (let index = 0; index < (flatType.length); index++) {  //this is how you loop an array from 0 => Normal looping 

    if (typeof flatType[index] == "number") { //here I am filtering out all the array if there DataType is Number type
        console.log('flatType[index]', flatType[index])
        storeAge.push(calcAgeTwo(flatType[index])) //here we are getting the the result calculating all the age in a loops => here it will be push one by one to the last index using the push function
        age = 2023 - (flatType[index]) // this is also a another way os calculating your age ==> without using the function to calculate the age => here it will be push one by one to the last index using the push function
        ages.push(age)
        blankArray.push(flatType[index])
    }
}
console.log('storeAge', storeAge) //here all the age are stored in a array format
console.log('ages', ages) //here all the age are stored in a array format => without using the calculate age function

// ===================== CONTINUE STATEMENT IN REVERSE LOOPS =====================
for (let index = (flatType.length - 1); index >= 0; index--) { //this is how you loop an array in a reverse way
    // console.log(flatType[index], '=>', typeof flatType[index])

    if (typeof flatType[index] !== 'string') continue; // the continue statement helps to immediately execute & exits the itteration & move on to the another
    console.log('flatType[index]', flatType[index]) //once the continue statement hits this line won't execute => means only the string type value are going to be print here

}

// ===================== BREAK STATEMENT IN REVERSE LOOPS =====================
for (let index = (flatType.length - 1); index >= 0; index--) { //this is how you loop an array in a reverse way
    // console.log(flatType[index], '=>', typeof flatType[index])

    if (typeof flatType[index] === 'string') break; // the break statement means it will stop the itteration once it find it's type
    console.log('flatType[index]', flatType[index]) //once break statement initiated => this line won't run => elements before hitting break statement all are going to print here
}

//======================= Loops Inside Loops ==============================
for (exercise = 1; exercise <= 5; exercise++) {
    console.log(`exercise No - ${exercise}`);
    for (rep = 1; rep <= 7; rep++) {
        console.log(`reps ${rep} - exercise set no ${exercise}`)
    }
}

//================= while Loops ===========================

let dice = Math.trunc(Math.random() * 6 + 1)
console.log('dice', dice)

// while (dice == 6) {
//     console.log('sixx')
//     dice++
// }

while (dice !== 6) { //Reason behind using do while loop sis when you don't know properly how many times the loop is going to be happen => for ex - in array we know than the length is the no of times the loop is gonna happen so 
    //This loop is used ar other scenarios => like this dice for an example
    console.log(dice)
    dice = Math.trunc(Math.random() * 6 + 1)
    if (dice === 6) {
        console.log('console is about to end', dice)
    }
}


// ================== FINAL CHALLENGE OF FUNDAMENTALS =================

const calcTipNew = function (bill) {
    return bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tipsNew = [];
let total = [];
let sumOne = 0; //DECLARING A SUM as 0 so that we can save the value of first two index values then simultaneously we can add other indexes to it one by

for (sum = 0; sum <= (bill.length - 1); sum++) {
    sumOne = sumOne + bill[sum]
    console.log(calcAverageBills(sumOne))
}

for (index = 0; index <= (bill.length - 1); index++) {
    console.log(sum + bill[index])
    tipsNew.push(calcTipNew(bill[index]))
    total.push(bill[index] + tipsNew[index])
}

function calcAverageBills(arr) {
    return arr / bill.length
}
console.log('total ==> Average', total, calcAverageBills(sumOne))

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5, 26];
const temperatureTwo = [4, -3, -8, -2, 'error', 'errortwo', 9, 12, 23, 16, 82, 9, 5, 26];

const newTemperature = temperature.concat(temperatureTwo)

const calctemperature = function (temperature) {
    let max = temperature[0];
    let min = temperature[0];
    for (index = 0; index <= temperature.length; index++) {
        // console.log(temperature[index])
        if (typeof temperature[index] !== 'number') continue
        // console.log(temperature[index])

        if (temperature[index] > max) max = temperature[index];
        if (temperature[index] < min) min = temperature[index];

    }
    return max - min
}


console.log("altitude temp", calctemperature(newTemperature))
// console.log('min', min)

var createCounter = function (n) {

    return function (a) {
        a = n
        n += 1
        return a
    };
};

const counter = createCounter(10)
console.log('counter', counter())
console.log('counter', counter())


