//Immediately Invoked functions expressions 
//used for to remove the pollution around global scope

(function jyoti(){
    console.log(`logged into`);
})();           //semicolon is required
// jyoti(Jyotiprakash);

(() => {
    console.log(`Hitesh`);
}) ();


((name) => {
    console.log(`DB CONNECTED ${name}`);
}) ('jyoti')





//nullish operator
let var1 = 5 ?? 10;
console.log(var1);

let var2 = null ?? 10;
let var3 = null ?? undefined;
let var4 = null ?? 10 ?? 20;

console.log(var2)
console.log(var3)
console.log(var4)