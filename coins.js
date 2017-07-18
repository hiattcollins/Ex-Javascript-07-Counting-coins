/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

let cashMoney = 1000.57;
console.log("How many quarters, dimes, nickels, and pennies in $", cashMoney, "?");

let numQuarters;
let numDimes;
let numNickels;
let numPennies;

function coinCounter () {

  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  cashMoney *= 100;

  // quarters

  numQuarters = parseInt(cashMoney / 25);
  coinPurse.quarters = numQuarters;
  // console.log("coinPurse.quarters", coinPurse.quarters);

  cashMoney -= numQuarters * 25;
  // console.log("cashMoney", cashMoney);

  // dimes

  numDimes = parseInt(cashMoney / 10);
  coinPurse.dimes = Math.round(numDimes);
  // console.log("coinPurse.dimes", coinPurse.dimes);

  cashMoney -= coinPurse.dimes * 10;
  // console.log("cashMoney", cashMoney);

// nickels

  numNickels = parseInt(cashMoney / 5);
  coinPurse.nickels = Math.round(numNickels)
  // console.log("coinPurse.nickels", coinPurse.nickels);

  cashMoney -= coinPurse.nickels * 5;
  // console.log("cashMoney", cashMoney);

// pennies

  numPennies = parseInt(cashMoney / 1);
  coinPurse.pennies = Math.round(numPennies);
  // console.log("coinPurse.pennies", coinPurse.pennies); 


  return coinPurse;
}

var coins = coinCounter();

console.log(coins);

/* Requirements

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies. */