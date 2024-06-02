const myArr = [1,2,3,4,5,6];
console.log(myArr[2]);

const heroes = ["Jyotiprakash","Hanuman"];
console.log(heroes[1]);

const myArr2 = new Array(1,2,3,4);

//Array methods
myArr.push(7);
console.log(myArr);
myArr.pop();

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);


//slice , splice

console.log("A", myArr);
console.log(myArr.slice(1,3));//1, 3 are indexes of that array
//it will print index value of 1,2 but not 3
console.log(myArr);
console.log(myArr.splice(1,3));//it will print the index values from 1 to 3;
console.log(myArr); // after using splice that 2,3,4 got removed from original array


let cars = ["bmw", "audi", "porsche"];
let supercars = ["lambo", "ferarri", "pagani"];

let allCars = cars.concat(supercars);
console.log(allCars);


console.log(...cars);
console.log(cars);


let score1 = 100, score2 = 200, score3 = 300;
let arrsc = (Array.of(score1, score2, score3));
console.log(arrsc);




