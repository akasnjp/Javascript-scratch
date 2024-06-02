//this keyword is used to represent that context data only present inside the same scope

//this keyword cnt be used in functions , arrow functions but csn be declared or used inside the object

let employee ={
    username: "hitesh",
    empid: 214101,
    details: function(){
        console.log(`${this.username} logged in`);
    }
    
}
employee.details();


//functions

function jyoti(){
    username: "prakash",
    console.log(this.username);   //undefined, this doesnt work in functions
}
jyoti();


//arrow function

let customer = () => {
    username: "snjp",
    console.log(this.username) //undefined, this doesnt work for arrow functions too
};
customer();
