// let answer = 33;
// console.log(typeof answer);
// console.log(typeof(answer));

// let valueNumber = answer;
// console.log(valueNumber);

// // datatype conversion
// let valueString = String(answer);
// console.log(typeof valueString);
// console.log(valueString);

let score = null;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); 

//
let answer = "Jyoti";

console.log(typeof answer);
console.log(typeof(answer));

let valueInAnswer = Boolean(answer);
console.log(typeof valueInAnswer);
console.log(valueInAnswer);

                                    /* STACK */
    /* Here in memory the data will be stored then if the data will be changed further then it will change in its new copy of it not with the original one*/
    
                                    /* HEAP */
    /* Here reference would be assigned with the same value and if the referenced one change its value then the real value will also get changed*/
let myName = "jyoti";
let anotherName = myName;
anotherName = "prakash";
console.log(myName);
console.log(anotherName); /*stack*/

let identity = {
    name: "Jyoti",
    email: "snjyoti@gmail.com"
};

let identity2 = identity;
identity2.name = "SnJp";
console.log(identity.name);
console.log(identity2.name); /*heap*/
    



                            


