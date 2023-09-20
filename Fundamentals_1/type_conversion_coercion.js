//==== type_conversion_coercion ====
console.log("==== type_conversion_coercion ====");


//Type Conversion
const valueType = '10';
console.log(`i am a ${valueType} year old son`);
console.log("convert to number", Number(valueType)); //here you can see at as a blue colour in console
const typeNumber = 20;
console.log('convert to string', String(typeNumber)); //here as a string you can see it as white coulour in console
console.log("string/Number", String(10), 10);

//methods like "String" & "Number" need to start from an capital letter or else it won't work

//Type coercion
console.log('23' - '10' - 3); //converts the whole thing into number because of "- " operator
console.log('23' + '10' - 5); //converts the 23 + 10 = 2310 - 5 = 2305, the whole thing into number because of "- " operator
console.log(23 - 10 + "3"); //converts the whole thing into number because of "+" operator
console.log("5" * "10"); //converts the value to an number; => that's how * operator works
console.log("10" / "2"); //converts the value to an number; => that how / operator works
console.log('23' + '10' + 5); //converts the 23 +10 +5 => to an "string" as we use + operator => two strings + one number are concatinated

//small game
let n = '5' + 5; // converts to string as "55" => "+" operator
n *= 2; //"55" * 2 = 110 output => " * " operator
console.log(n);

//coercion is actually a great way to write lot less code + readable code 

