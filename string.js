let name = "jyoti";
const repoCount = 1;
console.log(name +repoCount);

console.log(`My Name is ${name} and my repository is ${repoCount}`); // using of backtext ``
//the above one is all about declaring string in a way, next i will read how to declare string using object.
const gameName = new String('Jyotiprakash');
console.log(gameName[0]);//J
//object creation and it gives me back string 

const king = new String(`SN Jyotiprakash`);

const myString = king.substring(0,5);
console.log(myString);        

const url = (`My url is a best "https.snjp.com"`);
console.log(url.replace("a", "the"));

const numbr = 23.567;
console.log(numbr.toFixed(2)); // it makes round up of fraction digits or you could say the decimal number parts
console.log(numbr.toPrecision(2));// it makes round up of number , by seeing and rounding up the digits present in the decimals 


const num = 123.567;
console.log(num.toPrecision(2));



