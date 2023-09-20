console.log("==============Destructuring Arrays ==================")


const arrry = [2,3,4]


const [x,y] = arrry

console.log(x,y)


const resturant = {
    name : 'classico Italian',
    location : 'Via Angelo 23 Road',
    categories : ['Italian', 'pizzaria', 'vegetarian', 'non-Vegetarian'],
    startermenu : ['focaccia', 'garlic', 'bread', 'salad'],
    MainMenu : ['pizza', 'pasta', 'ristorra'],
    openinghour: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open :11,
            close: 21
        }
    },
}


let [starter, MainMenu] = resturant.startermenu;
console.log('MainMenu & starter', MainMenu, starter)



// switching variables
// const temp = MainMenu; //garlic to temp
// MainMenu = starter; // focaccia to mainMenu
// starter = temp // garilic to starter
// console.log('MainMenu & starter', MainMenu, starter) // now the value are exchanges in the same variable

setTimeout(() => {
    [MainMenu, starter] = [starter, MainMenu];
    console.log('MainMenu & starter', MainMenu, starter)
});


//nested Destructuring
const arrayTwo = [2,4,[5,6]]
const [a,d,[ ,b]] = arrayTwo

console.log(a,d,  b) //here the output : 2,4,6 => as we are giving a blank space while allocationg the value 5 

//setting Default value for nested Destructuring => this method is really helpful while calling API's
const [p =1, , [q =1 ,r = 1]] = arrayTwo //if we remove a value from the "arraTwo" it will take the default value as 1
console.log(p,q,r) // output will be 2,5,6


console.log("=============== Destructuring Objects ========================")

const {name : nameNew, location: locationNew, categories = []} = resturant; //here we are assigning the exact property name with new variable as "neameNew" => then the value of name is getting saved at namenew
console.log('categories', categories)
console.log('locationNew', locationNew)
console.log('nameNew', nameNew) // output here is the example 

// const {name, location, startermenu} =resturant // here we are assigning the exact properties of the object to get the value as name variable & location variable

//Default value
const {menu = [], MainMenu : maincourse = []} = resturant; //we are setting default value if the value is not present there ex -menu = [] 
console.log('maincourse', maincourse)
console.log('menu', menu)

//Mutating Variables
let e = 199;
let f = 200;
const obj = { e : 23, f : 53};

({e, f} = obj) // (.....) we are using this because as an element inside {} will be considered as code blocks so following the "expression js" rules we have to use (....)==> to re-assigning the value in the let variable which were already declared
console.log('f', f)
console.log('e', e)

//Nested Objects
const {fri : {open : OpenTIme, close: closeTime}} = resturant.openinghour // here we are fetching the object inside an object value => & assinging the obj properties open, close to the new variable as "closeTime" & "openTime"
console.log('closeTime', closeTime)
console.log('OpenTIme', OpenTIme)


const resturantTwo = {
    name : 'classico Italian',
    location : 'Via Angelo 23 Road',
    categories : ['Italian', 'pizzaria', 'vegetarian', 'non-Vegetarian'],
    startermenu : ['focaccia', 'garlic', 'bread', 'salad'],
    MainMenu : ['pizza', 'pasta', 'ristorra'],
    openinghour: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open :11,
            close: 21
        }
    },
    orderDelhivery : function({starterMenuIndex = 0, mainMenuIndex =1,  address, time = '22:00', name}){ //here we are calling all the objects as parameter => also doing destructuring at the same time 
        // console.log('name', name)
        // console.log('time', time)
        // console.log('address', address)
        // console.log('mainMenuIndex', mainMenuIndex)
        // console.log('starterMenuIndex', starterMenuIndex)
        
        console.log(`your Name is ${name} & you ordered at ${time}, your starterMenu is ${resturantTwo.startermenu[starterMenuIndex]} & mainCourse is ${resturantTwo.MainMenu[mainMenuIndex]} all the items will be delivered to you at ${address}`)
    },
    orderDelhiveryMore : function(guest1, guest2, guest3){
        console.log(`guest1 is ${guest1} & others are ${ guest1 +' '+ guest2 +' '+ guest3}`)
    },
    orderpizza : function(MainCourse, ...otherItems){
        console.log('MainCourse', MainCourse)
        console.log('...otherItems', ...otherItems)
    }
}

resturantTwo.orderDelhivery({ //here all the properties values are assigned => which are going to be called above the function as you can see
    name:"Rajesh",
    time : '12:30',
    address: 'janpath Road',
    mainMenuIndex : 2,
    starterMenuIndex : 3
})

resturantTwo.orderDelhivery({
    name: 'ramesh',
    time: undefined,
    address : 'puri',
    mainMenuIndex : undefined,
    starterMenuIndex : undefined
})

console.log("============ Spread Operator ... ====================")
const arr = [1,2,3]
const badnewarr = [2,3,4, arr]  
console.log('badnewarr', badnewarr) //the restult is going to print like this => output :  [2, 3, 4, Array(3)]

const newarr = [2,3,4, ...arr] //after using spread operator =>  [2, 3, 4, 1, 2, 3] 
console.log(newarr)
// console.log(newarr)

//Join two arrays
const newrestarray = [...resturantTwo.MainMenu, ...resturantTwo.startermenu]
console.log('newrestarray', newrestarray)

const str = 'jhon'
console.log(...str) // here it will print all the alphabate in single format, => j h o n

// console.log(`${...str}`) // we can't declare like this => spread operator doesn't work inside template literals

console.log([...str, newrestarray, 's']) // here the output will be in an array format

const valueMore = [...str, newrestarray, 's']
console.log(valueMore.flat()) //just experiment with using flat() function of array

//Real World Example
const array = ['Ramesh','suresh', 'harish',...[1,2]]

console.log('array', array)
console.log('...array', ...array) //output: Ramesh suresh harish

resturantTwo.orderDelhiveryMore(...array) //here we are call the function by using the spread operator a arguments 

console.log("===================Rest & Parameters ====================================")

const  [j,t,...othersArray] = [1,2,3,4,5,6,7,8,9,10]
const arrayNew = ['a','b','c','d',6,7,]

console.log([...arrayNew, ...othersArray])
console.log('newrestarray', newrestarray)

const [pizza, , ristorra, ...otherFood ] = newrestarray //an rest elemnt must be the last element

console.log('otherFood', otherFood)

// const [...resturantTwo.mainMenu]

console.log('j,t, othersArray', j,t,othersArray)

const restCheck = function(l,...numberMore){
    
    console.log('numberMore', 'l', l, numberMore)
}

const [l,...arrayRest] = [2,3,5];

console.log('l, ...arrayRest',l,...arrayRest)

restCheck(l, ...arrayRest) //this is a new way of passing parameter using rest than directly sending the array => 

const addTwo = function(...numbers){
    console.log(numbers) //here all the number will come how we have declared below the function one after another=>
    // let numberarr = []
    // let storevalue
    // for (let index = 0; index <= (numbers.length-1); index++){
    //             console.log('numbers', numbers)
    //             storevalue =  numberarr.push(numbers[index])
    //     }
}

addTwo(2,4)
addTwo(3,5,6)  //Problem => Number of times I call it need to add all the parameter with each other
addTwo(5,6,7)
addTwo(7,8,9)


resturantTwo.orderpizza('pizza','Mango','banana','patato') //we are giving 4 arrays as 1'st argument will be print as 'pizza' & remaining 3 argument will be print as 
// => "...Others as you can check in the console.log()"

console.log("=============short circuting || && use =====================")
//its better while using defaule values
objectcheck ={
     number : 23,
     statement : 'ramesh'
}
// || operator => assigning default value => it will sent the first truth value
const valuecheck = objectcheck.number || 10 //it will print the value 23 here as the first condition is true => OR else it will print the value 10(because 10 is true) if the objectcheck.number is undefined
console.log('valuecheck', valuecheck)

const valuecheckStatement = objectcheck.statement || false //it wroks the same as above case also in string type scenario
console.log('valuecheckStatement', valuecheckStatement)


// && Operator => it will sent the second truth value => if the first value is truth

nameNewTwo = 'jhon' //as it contains a value so it will be considered as true
console.log(nameNewTwo && 'alex') //=> this will return the secondd value as first value is true => second one as well

//pratical example while using function
if(resturantTwo.orderpizza){ //This is a traditional way of doing this as it is checking => orderpizza function is present in resturantTwo if yes then it will go into the if statement 
    resturantTwo.orderpizza('Raddish', 'spinach', 'carrot');
}

resturantTwo.orderpizza && resturantTwo.orderpizza('muli', 'gazar', 'halwa') //same thing is happening like the above if condition => but using the && operator 

console.log("========================= Nullish operator ============================")

let numbernull = 0;
console.log('numbernull', numbernull)

const nullish = numbernull || 10; //it will return 10 as => 0 & '' will be consider as false so
console.log('nullish', nullish)

//Nullish : Null & undefined (Not 0 & '') => it won't consider 0 & ' ', as falsy value
const nullvalue = numbernull ?? 10;
console.log('nullvalue', nullvalue)

console.log("===========Logical assignment operator =====================")


const rest = {
        resturant : 'gavani',
        numberpeople : 10
}

const rest2 = {
        resturant: 'gavaro',
        // numberpeopleTwo : 0
        owner : 'gustavo'
}

// rest.numberpeople = rest.numberpeople || 15; //output :10 as it returns the first true value
// rest2.numberpeopleTwo = rest2.numberpeopleTwo || 30 // output: 30 as it returns the first value '0' as => false

//other way of declaring the same thing as above
rest.numberpeople ??= 15
console.log('rest2.numberpeopleTwo', rest2.numberpeopleTwo) //=> undefined
rest2.numberpeopleTwo ??= 30 // output : 0 => as previous console it is undefined so using => nullish operator we can assign default value & a new property wil value 30 to it 

rest.owner ??= '<ananymous>' //it will set the value as ananymous as both the condition are true so it will print the last value
rest2.owner &&= '<ananymouse>' 


console.log(rest)
console.log(rest2)

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  console.log('============================== coding challenge#1========================')
  console.log(game)

//1st => Declared players name
let player1 =[] 
let player2 =[] 

player1 =game.players[0] //bayern Munich
console.log('player1', player1)
player2 = game.players[1] //Borrusia Dortmund
console.log('player2', player2)

//2nd => Task assigned player + goalkeeper
const [gk, ...fieldPlayers] = player1 // 

console.log('gk', gk)
console.log('fieldPlayers', fieldPlayers)

// console.log(player1 , player2)

//3rd => assigning all player in one array 
const [...allPlayers] = [...player1, ...player2] // all players => 22 players
console.log('allPlayers', allPlayers)

//4th => adding subPlayers
const [...players1Final] = [...player1,'Thiago', 'Coutinho', 'Perisic']
console.log('players1Final', players1Final)

// 5th => variables for odds values
const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2]
console.log('team1, draw, team2', team1, draw, team2)

//5th Another way of destructuring using objects
// const {odds: {team1, x: draw, team2}} = game
// console.log('team2', team2)
// console.log('x', x)
// console.log('team1', team1)

const printGoals = function(...players){
    console.log(...players)
}

printGoals('Thiago','ramesh')
printGoals(...game.scored)
printGoals(game.score)

    result = game.odds.team1 < game.odds.team2 && 'team 2 wins'
    result ||= 'team 1 wins'
    console.log('result', result)


    console.log('=============== THe for OF Loop =====================')
    
    const resturantThree = {
        name : 'vanince',
        location : 'fionaceess 82 Road',
        entity : function(value){
            console.log('value', value)
            for(let index = 0; index < value.length; index++)
            console.log(value[index])
            // return value[index]
        }
    }


    const menuNew = [...resturantTwo.MainMenu, ...resturant.MainMenu]
    console.log('menuNew', menuNew)

    for ( const newMore of menuNew ) console.log('newMore', newMore) //This if a another way of printing all the element into an single array => by using "of" Type
    
    // for ( const newMoreTwo of menuNew.entity()){
    //     console.log('newMore', newMoreTwo)
    // } 

    // console.log(menu.entity())

    console.log('================= Enhanced object literal =============================')
    
    const weekdays = ['mon', 'tue', 'wed','thurs', 'fri', 'sat', 'sun']

    const openinghour = { //we can declare an another object and use only the variable name inside the 'resturantfour' object
        [weekdays[0]] :{ //assigning the above array name as a property name inside the 'hour' object
            openTime : 10,
            close : 22
        },
        [weekdays[1]] : { //we have declared a property name using template literals
            openTime : 10,
            close : 22
        },
        [weekdays[2]]: {
            openTime : 11,
            close : 23
        },
        [weekdays[3]]: {
            openTime : 1,
            close : 18
        },
        [weekdays[4]]: {
            openTime : 0, //24 hour opens
            close : 18
        }
       
       
    }
       
    const resturantFour = {
        name : 'vanince',
        location : 'fionaceess 82 Road',
        entity (...value){ //we can also declare function like this without writting function keyword()
            // console.log('value', value)
            // for(let index = 0; index < value.length; index++)
            // console.log(value[index])
            // return value[index]
            return value
        },
        openinghour, //here we have used the above object name
        // openinghour : {
        //     // mon : 1
        // }
    }
    console.log('resturantFour', resturantFour)
    console.log('resturantFour', resturantFour.entity(5))

console.log('=============== Optional chaining ====================')

//Dilesh sir technique
console.log('resturantFour.openinghour', resturantFour.openinghour) //output : undefined 
if(resturantFour.openinghour && resturantFour.openinghour.mon) console.log(resturantFour.openinghour.mon)

// let day = 'mon' //property name is declared here

// console.log(resturantFour.openinghour[day]) //assigning the variable as property name 
// console.log('resturantFour', resturantFour)

//example using for of loop 
for(const day of weekdays){
        console.log(day)
        const open = resturantFour.openinghour[day]?.openTime ?? 'closed' //this is the combine of ? (optional chaing ) &  ?? nullish coallising operator to assign the open variable as 'closed' value
        console.log(`on ${day} we open at ${open}`) // => if resturantFour.openinghour[day]? => this value comes undefined then nullish coallising operator start working 
}

console.log(resturantFour.openinghour?.mon?.open) //it will directly return undefined => if not then it will print the value of open 

//methods

console.log(resturantFour.entity?.(56,3) ?? 'method does exists')

// console.log( 'suresh' || 'ramesh')

console.log(resturantFour?.entityMore?.(5) ?? 'method does no exists')

//arrays

const user = [{
        nameUser : 'jhon', 
        bday : 1998, 
        address : 'ney-York',

        contact: {
            phone: "987-654-3210",
            email: "john123@xyz.com",
            address: {
                city: "Berlin",
                country: "Germany"
            }
        }
}]

console.log(user[0].contact)


console.log('user', user[0]?.nameUser ?? 'harish because user propery is empty')
console.log('user.length', user.length)
// console.log(user.length = 0)

//traditional way of doing the above things using if else statement 
    if(user.length > 0) {
        console.log(user[0].nameUser)
    } else { 
        console.log(`user name is empty`)
    }

const properties = Object.keys(user[0].contact) //here we are fetching the property of the contact object, inside the user array type object => that's why we have used [0] to fetch the value
console.log('properties', properties)

const valueTwo = Object.values(user[0].contact) //here we are fetching all the value of the above properties => keynames 
console.log('valueTwo',valueTwo)

const entiriesTwo = Object.entries(user[0].contact) //here we are fetching all the values in an array format => which can be really useful in different circumstances
console.log(entiriesTwo) 

const propertiesTwo = Object.entries(user[0].contact.address)
console.log('propertiesTwo', propertiesTwo)
for ( const propertyKey of propertiesTwo) console.log('propertykey',propertyKey)

// for( const element of entiriesTwo) console.log(`my ${element[0]} is ${element[1]}`)



for ( const [keys, keys2] of entiriesTwo) 
console.log('keys & element', keys, keys2 )

for ( const elemtncheck of entiriesTwo) console.log('elemtncheck',elemtncheck)
for (const [city, country] of propertiesTwo) console.log('city, country',city, country)


// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") => for of loop + using entries

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) => (using entries to find length of array)all the scores/array.length(3) =>result

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this: 
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

*/
const gameTwo = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  console.log("================coding challenge #2 =====================")

//1st problem => printing player with goals + 4th Problem => printing a new objects with players & there respective scores 
let scores = {}
let checkcount = 0;
for ( const [index, players] of Object.entries(gameTwo.scored)) {
    console.log(`Goal ${Number(index)+1}, ${players}`)
    // ? scores[players]++ : (scores[players] = 1)
    // console.log('scores[players]++', scores[players]++)
    scores[players] ? scores[players]++ : (scores[players] = 1) //here we are checking the no of times the player is getting called => then we are incrementing the value => took help to think of the logic

}
console.log('scores', scores)



//2nd problem => finding average
console.log(gameTwo.odds)
let sum = 0
const odds = Object.entries(gameTwo.odds)

for( const averageValue of Object.values(gameTwo.odds)) console.log(sum+= averageValue)

console.log(sum)
console.log('average ', sum/odds.length)


//3rd Problem => printing the odds of victory 

for(const [value,keys] of Object.entries(game.odds)) {
        const draw = value === 'x' ? 'draw' : value //here we are assigning the variable draw => if the value is x then the draw will store the value as draw
        // console.log('value', draw)
        console.log(`odds of victory ${gameTwo[value] || draw } : ${keys}`)//=> we use here two type of variable => 1st the gameTwo(object) + value(to get the team names) => then in or we used draw variable of the 1st one  is undefined (means false) then it will go to draw variable means true & will print the value
}


// const valuemore = value
// console.log('valuemore', valuemore)

// for(const [key1, key2] of value) console.log(key1, key2)

console.log("================== sets =========================")
const setObjects = new Set([ //declaration of sets & it is => we can itirate the values => it will remove the duplicate values are well
    'krushna', 
    'krushna', 
    'ramesh', 
    'suresh', 
    'pizza', 
    'pizza' 
])

console.log(setObjects)

console.log(new Set('jhons')) // output : j,h,o,n,a,s => we itirate over each string => it will remove the duplicate values are well

console.log(setObjects.size)
console.log(setObjects.has('pizza'))
console.log(setObjects.has('bread')) //'has is like include function of array' output: true/false
console.log(setObjects.add('gralic bread'))
console.log(setObjects.add('toast'))
console.log(setObjects.add('toast')) //it won't add th value as it is a duplicate value=> which is already added 
console.log(setObjects)
// console.log(setObjects[0]) //we can't access the values inside the sets like this => if you want to access the values inside it then better use arrays => set is used to set a a definite set of values
console.log(setObjects.delete('toast'))

for (const values of setObjects.entries()) console.log('values',values)

console.log('setObjects', setObjects)
console.log(setObjects.clear())
console.log(setObjects)

const staff = ['waiter', 'chef', 'waiter', 'waterBoy', 'waiter']
 
const staffSet = [...new Set(staff)] //using destructuring + new set we are assigning the staff array as an new array 'staffSet' => also we are making the array only unique
console.log(staffSet)

console.log('========================= map ==============================')

const restNew = new Map()
console.log('restNew', restNew)

restNew.set('name', 'resterintano')
restNew.set(1, 'avengue 23 street')
restNew.set(2, 'Tower side stree 54')

restNew
.set('categoris', ['Italian', 'pizzaria', 'vegetarian', 'non-Vegetarian'])
.set('open', 11)
.set('close', 22)
.set(true, 'Today we are open')
.set(false, 'Today we are closed')
console.log(restNew)

console.log(restNew.get(true)) //it will also fetch the boolean type key stored value
console.log(restNew.get(1)) //it will get the 1 key type value which is the first address 
console.log(restNew.get('name')) //it will get the name type key => as it is a string type
console.log('restNew.get(open)', restNew.get('open'))

const time = 23;
console.log( restNew.get(time > restNew.get('open') && time < restNew.get('close')) )

// restNew.set([1,2], 'Testing') //=> we can't fetch value using [1,2] as it will not stored in the same memoery
const arrnew = [1,2] //we can set values like this so that it will be stored in the same memory and will be able to retrive
restNew.set(arrayNew, 'Testing')
console.log(restNew)
console.log(restNew.get(arrayNew)) //Output :testing

console.log('restnew size',restNew.size)
console.log( 'my name size',new Set('krushnamahapatra').size)
restNew.set(document.querySelector('h1'), 'heading')

console.log('===================== maps iteration =======================')

const newMaps = new Map([
    ['question', 'which is the best language ?'],
    [1, 'java'],
    [2, 'c++'],
    [3, 'javascript'],
    ['correct', 3],
    [true, 'you answer is correct'],
    [false, 'your answer is wrong']
]) 
    
console.log(newMaps)

//converting Objects to Maps
console.log(openinghour)
console.log(Object.entries(openinghour))
const hourMap = new Map(Object.entries(openinghour))
console.log('hourMap', hourMap)

for(const [keys, values] of hourMap ) {
    console.log(`resturant opens on ${keys} & open time is ${values.openTime} , close time is ${values.close}`)
}
// }console.log(keys, values)

//Quiz Game
console.log(newMaps.get('question'))

for( const [key, value] of newMaps){
    // console.log( key, value)
    if(typeof(key) === 'number') console.log(`Answer is ${key} : ${value}`)
} 

// const promtValue = Number(prompt('choose your answer'))
// console.log(newMaps.get(promtValue === (newMaps.get('correct'))))

console.log(...newMaps)
// console.log(...newMaps.entries()) //same as previous one
console.log(...newMaps.values())
console.log(...newMaps.keys())

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates) => Done
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log. => Done
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes) => DOne
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: => DOne
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  console.log('gameEvents', gameEvents)
  console.log(gameEvents.delete(64))
  console.log(gameEvents)

  console.log([...new Set(gameEvents.values())]) //unique all the events happend

  const events = [...new Set(gameEvents)]
  console.log(events)
 

for(const [key, values] of events) {
    if(key <= 45) console.log(`[FIRST HALF] ${key}: ${values}`) //Output : [FIRST HALF] 17: ⚽️ GOAL
    if(key > 45) console.log(`[SECOND HALF] ${key}: ${values}`) //output : [SECOND HALF] 61: 🔁 Substitution
}

console.log(`An event happened, on average, every ${90/events.length} minutes`)


console.log('======================= Strings ============================')

const StringNew = 'Tap Air Portugal'
const Plane = 'B320'

console.log(StringNew[0])
console.log(StringNew[4])
console.log(StringNew.indexOf('r'))
console.log(StringNew.lastIndexOf('r'))
console.log(StringNew.endsWith('l'))
console.log(StringNew.replace('r', 't'))
console.log(StringNew.length)

// console.log(StringNew.slice(4, 8))
let newstring =[]
 newstring = StringNew.slice(4, 7) //=> if we give number as 8 it will start deleting after the space => so we used 7 to remove the space as well from the whole word
console.log('newstring', [newstring])

console.log(StringNew.slice(0, StringNew.lastIndexOf(' '))) //output : Tap Air 
console.log(StringNew.slice(1, -1)) //-1 starts removing from the last sides
console.log(StringNew.slice(StringNew.lastIndexOf(' ') + 1)) //adding 1 means we are adding 1 to the last index of => ex if last index of ' ' is 7 then +1 will make it 8 => so it will start slicing from the indexof 8


const checkSeats = function(seatName){
    // console.log('seatName', seatName.length)
    // console.log('seatName.lastIndexOf(C)', seatName.lastIndexOf('C'))
    // console.log('seatName.lastIndexOf()', seatName.lastIndexOf('C') === (seatName.length-1))

    if(seatName.lastIndexOf('C') === (seatName.length-1) || seatName.lastIndexOf('B') === (seatName.length-1)) {
        console.log('You are unLucky') 
    }
    else {
        console.log('You are lucky')  }
}

checkSeats('B340C')
checkSeats('aksldasd13')
checkSeats('B340B')

console.log( new String('jhonnas'))
console.log(typeof new String('jhonnas')) // Output : object Type => this is a javacript bydefault function
console.log(typeof new String('jhonnas').indexOf('j')) // Output : Number Type as we are finding the index number
console.log(typeof new String('jhonnas').slice('j')) //output : string Type


//Upper Lower
const stringName = 'krUsHnA'
console.log(stringName[0].toUpperCase() + stringName.slice(1,6).toLowerCase() + stringName.slice(-1).toUpperCase()) //Output : KrushnaA

const emailNew = 'krushnamahapatra8@gmail.com'
const emailCheck = '   KrushnaMahapatra8@gmail.com'
// console.log('emailCheck', emailCheck.toLowerCase())

console.log(emailNew)
console.log(emailCheck.toLowerCase().trim())

console.log(emailNew === emailCheck.toLowerCase().trim())

//Replacing
const price = '288,98$'
const priceNew = price.replace('$', '#').replace(',', '.')
console.log(priceNew)

const announcement = 'All passenger come to the door no 23,please close all the door after entering,'

console.log(announcement.replace('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate')) //This is a basic example of regular expression => / /g (syntax of reg exp) 'g' means global change => we will learn about it more in future

//boolean
const checkBaggage = function(iteam){
    const bagname = iteam.toLowerCase()
    if(bagname.includes('knife') || bagname.includes('gun') || bagname.includes('knif')) console.log('you are not allowed')
    else console.log('you are allowed')
}

checkBaggage('I have a laptop, & a knife, & a gun, I want to kill people')
checkBaggage('I have a laptop,  I want to kill people')

//Another example
const aiplaneName = 'AirBus 340neo'

console.log(aiplaneName.startsWith('Air')) // checks the first value is correct or not
console.log(aiplaneName.endsWith('Bus')) //as the names are self explainatory

//Split & Join
console.log('a+very+nice'.split('+'))
const valueMore2 = 'a+very+nice'.split('+')
console.log('valueMore2', valueMore2)

const [abc, nwew, nameMore] = valueMore2
console.log('nameMore', nameMore)
console.log('nwew', nwew)
console.log('abc', abc)

const newJoin = ['Mr.', abc, nwew.toUpperCase(), nameMore].join(' ')
console.log('newJoin', newJoin)

const newnames = function(items){
    console.log('items', items.toLowerCase())
    const spitItems = items.split(' ')
    console.log('spitItems', spitItems)
    let stringarr = []

    for(const name of spitItems) {
         stringarr.push(name[0].toUpperCase() + name.slice(1, (name.length-1)).toLowerCase() + name[name.length-1].toUpperCase())
         console.log('stringarr', stringarr)
        

    }
    console.log('stringarr', ...stringarr)

}

newnames ('jessica ann smith davis')
newnames ('I have a laptop, I want to kill people')

//padding
const message = 'go to the game 25'
console.log(message.padStart(30, '+').padEnd(41, '='))

console.log('Krushna'.padStart(20, '+'))

const maskingcreadicard = function(number) {
    console.log('number', number)
        const strnew = number + '' //another way of converting a number to string
        console.log('strnew', strnew)
        const str = String(number)
        console.log(str)

        const masking = str.slice(str.length-4).padStart(str.length, '*') //first it will do the slice part then according to the padding logic => after the string length it will start the reamaining as padding
        // console.log('masking', masking)
        return masking
    }

console.log(maskingcreadicard(1231238172893712912))
console.log(maskingcreadicard('123242341111111111'))

console.log('krushna  '.repeat( 5))
console.log('✈'.repeat(10) )

console.log('=================== Coding Challenge #4 (conversion of multiple values to Camelcase values)==========================')
/* 


The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value
    console.log(underscore(text))
})

const underscore = function(valueparam){
    // console.log('valueparam', valueparam)
    let splittext = valueparam.split('\n')

    let item = valueparam.toLowerCase()
    const newcheck = item.split("_")
    let arrFinalValue = []
    let arrassemble = []
    let finalValue = ''
    for( const [key, newiteam] of newcheck.entries()) {
        if(key === 0) {
        } else{
            let newiteamarr = newiteam[0].toUpperCase() + newiteam.slice(1, (newiteam.length))
            arrassemble.push(newiteamarr )
        }   

        finalValue = `${newcheck[0].concat((arrassemble).join(''))}`   
    }
    arrFinalValue = finalValue.split('\n')
    let newIndex = 0;
    let againFinal = []
    for (let [index,value] of arrFinalValue.entries()) {
        
        newIndex =  index + 1
        againFinal.push(value + ' ' + ('✅').repeat(newIndex))
        // console.log(againFinal[index])
    }
    // console.log(againFinal.toString()) //=> to return all the values in string format
    return againFinal; 

}


// self
console.log('self', window.frames)