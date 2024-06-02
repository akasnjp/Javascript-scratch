//objects are being declared in literals and constructor

//when declared in constructor it is singleton otherwise it's not singleton in literals
let mySym = Symbol("key1"); // Symbol Syntax Literals

let jsuser = {                  //not singleton object
    name: "Jyotiprakash",
    email:"snjyoti2002@gmail.com",
    age: 18,
    regd: 2141010071,   
    "fullname": "SN Jyotiprakash",
    [mySym]: "myKey1"
};

console.log(jsuser.regd); 
console.log(jsuser["email"]);
console.log(jsuser.email);
console.log(jsuser["fullname"]);
console.log(typeof[mySym]);

// Object.freeze(jsuser);
jsuser.email = "snjyotieejfj@gmail.com";
console.log(jsuser);


jsuser.greeting = function(){
    console.log("Hello Hii")
};
console.log(jsuser.greeting()); //have to comment out the object freeze while printing this as greeting method is being added to it for first time and object freeze wont allow it

jsuser.greetingTwo = function(){
    console.log(`Hello Hii, ${this.name}`)
};

console.log(jsuser.greetingTwo());



                        //Constructor Singleton

const bike = new Object();  // singleton

let obj = {};

obj.id = 18;
obj.name = "Jyoti";
obj.section = 'B';

console.log(obj);



let regularUser = {                 // objects under objects
    email: "snjp@gmail.com",
    username: {
        firstname: "SN",
        lastname: "Jyotiprakash",
        section: {
            classno: 'B'
        }
    },
    age: 18

};

console.log(regularUser);
console.log(regularUser.username?.lastname); //? -> API Call


let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "a", 4: "c"};

let obj3 = {...obj1, ...obj2};
console.log(obj3);

let prev = Object.keys(regularUser);
console.log(prev);
//Object.values    Object.entries


console.log(regularUser.hasOwnProperty("username"));
