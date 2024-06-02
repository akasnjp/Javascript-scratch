// let name = "snjp"; //stack actually creates a copy of your original content and heap creates a memory for your non primitive data 
// console.log(name);
//heap actuallly creates reference to it
let myHeap = {
    email : "akasnjp@gmail.com",
    int : 18
}
let myHeap2 = myHeap;
myHeap2.email = "snjyoti2002@gmail.com";
console.log(myHeap.email);
console.log(myHeap2.email);
let naam = "Jyotiprakash";
let roll = 18;
console.log(`My name is ${naam} and my roll no is ${roll}`);
