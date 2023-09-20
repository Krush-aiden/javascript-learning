console.log('==== let, const, var ====')
// ==== let, const, var ====
let age = 30;
age = 32; // we can update the variable value with new value 

const birthDate = 1997;
//birthDate = 1998; // it will show Assignment to constant variable error as we can't change a const value through out the function

var job = 'engineer';
job = 'carpenter'; //var is an legacy variable but  
//Let is bloced scope & var is function scope => we will later discuss about each topic  

destination = 'kolkata';
console.log(this) //this an global thing
console.log('destination', destination) //it will be created as an global property like you see in this console print