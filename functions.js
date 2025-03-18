console.log("This is from the function file")

// functions

// how to declare functions

// datatype 
 function sayHello(){
    console.log("hello rizwan")
    console.log("how are you")
    console.log("I hope you are fine")    
}

const user1 = {
    name:"Maina",
    balance: 0
}

const user2 = {
    name:"Tom",
    balance: 2000
}

function withdraw(user){
    const balance = user.balance
   if(balance > 0){
    console.log("you can withdraw")
   }else{
    console.log("You dont have a balance")
   }
}
// calling /invoking a function
// sayHello()

// withdraw(user2)
// withdraw(user1)

// const isPresent = false

// if(isPresent){
//     sayHello()
// }

// const myObject = {
//     name:"rizwan",
//     greet: function greetMe(){
//         console.log("hello world")
//     }
// }

// myObject.greet()

function addTwoNumber(number1 , number2){
    console.log(number1 + number2)
}

addTwoNumber(50 , 50)
addTwoNumber(30 , 60)