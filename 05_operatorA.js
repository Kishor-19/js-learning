console.log("=====Step 1=====");

function squareOfWordLength(one) {
    console.log(`${one}`);
    var length = one.length;
    console.log(`Length of ${one} is: ${length}`);
    return length * length;
}

var javascriptLength = squareOfWordLength("Javascript");
var googleChromeLength = squareOfWordLength("GoogleChrome");
var developerLength = squareOfWordLength("Developer");

console.log("Square of word length of Javascript:", javascriptLength);
console.log("Square of word length of GoogleChrome:", googleChromeLength);
console.log("Square of word length of Developer:", developerLength);


console.log(`=====Step 2=====`);

function react(){
    var str=`I am Angular developer`
    console.log(str);
    var length = str.length;
    console.log(`Length of string is: ${length}`);
    var word = str.split(" ");
    var wordcount=word.length;
    console.log(`Length of words is :${wordcount}`);
    var div=length/wordcount;
    console.log(`Division of length of string by length of word is :${div}`);
    var multiply = length*wordcount;
    console.log(`Multiplication of length of string by length of word is :${multiply}`);
}
react();