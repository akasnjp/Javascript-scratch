let arr = [1,2,3,4,5,6,7,8,9,10];
// let newnum = arr.map((num) => num + 10 );
// console.log(newnum);
// let newnum1 = newnum.map((num)=> num + 1);
// console.log(newnum1);
// let numnew3 = newnum1.filter((num)=> num > 40);
// console.log(numnew3);

const newarr = arr
                .map((num) => num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 40)

console.log(newarr);

// reduce

const arr1 = [1,2,3,4];
const initialvalue = 0;
const sumwithinitial =arr1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialvalue);

console.log(sumwithinitial);