console.log("==== first ====");

function greet (){
    console.log("Hii, Codemind");
}

greet();

function show (){
    console.log("My sef ,Kishor");
}

show();

console.log("==== Second ====");

function personalDetails(firstName,lastName,collegeName){
    console.log("Kishor");
    console.log("Dendage");
    console.log("G.S.Moze College of Engineering");
}

personalDetails();

console.log("==== Third ====");

function swapValues(arg1,arg2){
    var arg1 ="Virat"
    var arg2 ="Anushka"
    console.log("Argument 1 is:",arg1);
    console.log("Argument 2 is:",arg2);
    console.log("After swap");
    temp = arg1
    arg1 = arg2;
    arg2 = temp;
console.log("Argument 1 is:",arg1);
console.log("Argument 2 is:",arg2);

var arg1=1000;
var arg2=2000;
console.log("values before swap 1:",arg1);
console.log("Values before swap 2:",arg2);
temp = arg1
arg1 = arg2
arg2 = temp
console.log("After swap1:",arg1);
console.log("After swap2:",arg2);

}
swapValues();

console.log("====fourth====");

function add(n1,n2,n3){
    console.log("Arguments:", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition is:",result);
}
add(10.23,600,40);

add("Hii", "Good", "Morning");
