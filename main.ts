#! /usr/bin/env node 

import inquirer from "inquirer";

let myBlance = 50000;
let myPin = 2245;

console.log("Welcome to ATM Machine");


let pinAnswer = await inquirer.prompt(
    [
        {
          name : "pin",
          type : "number",
          message :"enter your pin Code:",
           
        }
    ]
);

if(pinAnswer.pin === myPin){
  console.log("correct pin code, Login Successfully");


let operationAns = await inquirer.prompt(
  [
    {
      name : "operation",
      message : "please select the option",
      type : "list",
      choices : ["withdraw Amount","checkBlance",]
    }
  ]
);

if(operationAns.operation === "withdraw Amount"){
  let withdrawANS = await inquirer.prompt(
    [
      {
        name : "withdrawMethod",
        type: "list",
        message : "Select a withdraw method",
        choices : ["Fast Cash","Enter Amount"]
      }
    ]
  );
  if(withdrawANS.withdrawMethod === "Fast Cash"){
    let fastCashAns = await inquirer.prompt(
      [
        {
          name : "fastCash",
          type : "list",
          message : "Select Amount",
          choices : [1000,2000,5000,10000,20000,50000,60000]
        }
      ]
    );
    if(fastCashAns.fastCash > myBlance){
      console.log("Insufficient Blance");
    }
    else{
      myBlance -= fastCashAns.fastCash
      console.log(`${fastCashAns.fastCash} withdraw Successfully`);
      console.log(`Your Remaing Blance is: ${myBlance}`)
    }
  }
 else if (withdrawANS.withdrawMethod === "Enter Amount"){
    let amountAns = await inquirer.prompt(
      [
        {
          name : "amount",
          type : "number",
          message : "Enter the amount to withdraw:"
        }
      ]
    )
    if(amountAns.amount > myBlance){
      console.log("Insufficient Blance")
    }else{
      myBlance -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw Successfully`);
      console.log(`Your Remaing Blance is: ${myBlance}`);
    }
  }
}


else if (operationAns.operation === "checkBlance"){
    
  console.log(`Your Current Blance is ${myBlance}`);
 
}
}
else{
  console.log("Pin is Incorrect,Try Again");
}

