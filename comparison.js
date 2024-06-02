console.log(2 > 1); //this is a kind of comparison where i can easily tell the answers , first one will be true 
console.log(2 == 2);//true

console.log("2" > 1); //here i can see "2" , 2 is in string and i'm comparing it with number , so js will convert the string to number automatically to compare with number, so the answer is true. 
console.log("02" > 1);//similarly all of these will become true
console.log("2" == 2);//true

console.log(null > 0); //line 8 to 14 , doesn't have our predictive answer , it could show any boolean value , so avoid this as much you can
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


console.log("2"===2); // as in those previous call , "2"==2 , it is datatype independent, doesn't see whether it have same datatype or different 
//but in this triple equals to === , it first shows the datatype , then number , then will give true as result

//but in this case number is equivalent but the datatype is not , so ("2"===2) will give false as value , coz string cant be equal with number.