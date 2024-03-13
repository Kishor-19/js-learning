

function stringHandsOn(){
    greet=`   Hey you are doing good, keep it up   `
    console.log(`Step 1: "${greet}`);

var length= greet.length;
console.log(`Step 2 : The length o string is :${length}`);
var trimmed = greet.trim();
console.log(`Step 3 : After removing space string is:${trimmed}`);

var afterTrimed=trimmed.length;
console.log(`Step 4 : Length After trim is:${afterTrimed}`);

var extra=greet.length-trimmed.length;
console.log(`Step 5 : Extra spaces between original string and trimmed string is:${extra}`);

var words=trimmed.split(/\s+/);
console.log(`Step 6 : Length of words after step 3 is :${words.length}`);

index=trimmed.indexOf("good");
console.log(`Step 7: The Index of word good is :${index}`);

var substring=trimmed.substring(22);
console.log(`Step 7: The substring of index 22 is:${substring}`);

var endup=trimmed.endsWith("up");
console.log(`Step 8: The strings ends on word "up" :${endup}`);

var startup=trimmed.startsWith("Hey");
console.log(`Step 10: The string starts up with "Hey":${startup}`);

}
stringHandsOn();

