console.log(" =========== strings & Template Literals ==============")
const firstName = 'jhonas';
const birthyear = 1985;
const jobHolding = 'teacher';
const year = 2037;

const jonasDetails = "I 'am" + ' ' + firstName + ',' + "my current job is" + ' ' + jobHolding + ' ' + "& my birth date is" + ' ' + birthyear;
console.log(jonasDetails)

//Template Literal example
const jonasDetailsNew = `I 'am ${firstName} my current job is ${jobHolding} & my birthdate is ${year - birthyear}`;
console.log('jonasDetailsNew', jonasDetailsNew) //this a mostly used new feature from ES6 version; 

console.log(`hello my name is my name is` + firstName + " who are you " + ' ' + " I am ramesh");

console.log(` i want to
write multiple
Lines  
Like this`) //this is an another use case of template literals

