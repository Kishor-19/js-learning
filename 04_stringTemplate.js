console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";
var totalExperience = 11;

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} i have experience of ${totalExperience} years `);

console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log("=======trim()========;");
var greet="    Good Morning    ";
console.log(`${greet} length is: ${greet. length}`);

var trimmedGreet=greet;
console.log(greet.trim());
console.log(`Trimmed "${greet}" length is: ${trimmedGreet.length}`);


console.log("======Includes=======");
var greet="Good Morning";
console.log(greet.includes("Good"));

console.log("=====Slice=====");
var greet="Good Morning";
console.log(greet.slice(0,10))