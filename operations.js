let num = 9;
let negnum = -num;
console.log(negnum);

console.log("1" + 2);
console.log("2" + 1);
console.log("1" + 2 + 2); //left to right
console.log(2 + 2 + "1");

let gameCounter = 100;
gameCounter++;  //suffix
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);

let gameSpeed = 100;
++gameSpeed;  //prefix
console.log(gameSpeed);
++gameSpeed;
console.log(gameSpeed);

// for(let i = 0; i<5; i++){
//     console.log("Will die as The Best Man in this Planet");
// }

for(let i = 0; i<5; ++i){
    let v = 5;
    let sum1 = ++v;
    // let sum = v++;
    console.log(sum1);
    // console.log(sum);
    
}



