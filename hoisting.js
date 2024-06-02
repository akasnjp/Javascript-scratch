//scope 
console.log(addsum(5));  // this can be accessed at whatever point
function addsum(num){
    return num + 2;
}
console.log(addsum(5));



//Hoisting
//console.log(additem(5));   //ReferenceError: Cannot access 'additem' before initialization

let additem = function(num){ //additem acts as expression as well as function
    return num + 1;
}

