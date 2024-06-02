
function calculatePrice(...num1){ //
    return num1
    //calculatePrice -> reference , it will not give any result
    //calculatePrice() -> function call with output
}
console.log(calculatePrice(200,300,400))

const newArray = [200,400,300];

function returnSecond(getArray){
    return getArray[1]
}

console.log(returnSecond(newArray));

const user = {
    username: "sai",

    roll: 12


};
function handleObject(anyobject){
    console.log(`${anyobject.username}`);
}
handleOnject = user;


function addSum(number1, number2){ //parameters accepts arguments
    console.log(number1 + number2);
}
addSum(7,6); // arguments passed as 7 6


function loginUser(username){
    return `${username} just logged in`;
}
console.log(loginUser("Jyoti"));

// function loginUser(username){
//     return username ;
// }
// console.log(loginUser("Jyoti"));

//object passing in function

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username: "Jyoti",
    price: 199
});


//arrays passing using functions

const arr = [200, 400, 500];

function resarr(getArray){
    return getArray[1];
}
console.log(resarr(arr));