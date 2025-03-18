

const users = [
    {
        name:"John Doe",
        accountNo:"hkkdn",
        balance: 4000
    },
    {
        name:"Jane Doe",
        accountNo:"jjksdfd",
        balance: 1000
    }
]
// CRUD

// change user name

function changeName(user , newName){
   user.name = newName

   console.log("the user has now been changed")
}


// checks user balance

function checkBalance(user){
    if(user.balance > 0){
        console.log("the user has a balance of " + user.balance)
    }else{
   console.log("You have no balance please deposit")
    }
}
// deposts - adding user balance
function deposit(user , amount){
    user.balance = user.balance + amount

    console.log("You new balance is " + user.balance)
}

// withdraws user balance
function withdraw(user , amount){
    if(user.balance < amount){
       console.log("you have no balance")
    }else{
        user.balance = user.balance - amount
        console.log("You new balance is " + user.balance)
    }
}

deposit(users[0] , 10)
withdraw(users[0] , 200)

// checkBalance(user)

withdraw(users[0] , 300)