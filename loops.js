// console.log("loops file")

//

// console.log("hello world")

// console.log("hello world") // .....

const fruits = ["Mongoes", "oranges", "guavas"];

// while loop
let iterator = 0
// while(iterator < fruits.length){
//    console.log(fruits[iterator])
//    iterator++
// }

// do..while
do{
    console.log("hello world")
    iterator++
}while(iterator < fruits.length)


// const numbers = [60 , 70 ,30 ,60 ,12 ,60 ,65 ,879 , 10]

// let total = 0
// let iterationCount = 0
// let theItemsOperatedOn = 0

// for(let i = 0;  i < numbers.length  ;  i++){
//     iterationCount++
//     if(numbers[i] < 50){
//         theItemsOperatedOn++
//         total = total + numbers[i]
//     }
// }

// console.log(iterationCount)
// console.log(theItemsOperatedOn)
// console.log(total)

// create a function that takes in an array of numbers and returns the total

function theTotal(numberArray) {
  let total = 0;

  for (let i = 0; i < numberArray.length; i++) {
    total = total + numberArray[i];
  }

  return total;
}

// console.log(theTotal([2, 3, 4]));
// console.log(theTotal([20, 35, 40]));
// console.log(theTotal([50, 30, 45]));

// create a function that sums up the total of the first 50 numbers

function sumOfNumbers() {
  let finalValue = 0;

  for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
      finalValue = finalValue + i;
    }
  }

  return finalValue;
}


// break and continue
console.log(sumOfNumbers());
