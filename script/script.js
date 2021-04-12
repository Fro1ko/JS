"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "фриланс";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 1000000;
let period = 6;

do {
  money = prompt("Ваш месячный доход?");
} while (!isNumber(money));


function showTypeOf(type) {
  console.log(type);
}
showTypeOf(typeof(money));
showTypeOf(typeof(income));
showTypeOf(typeof(deposit));

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(","));

let expenses = [];

function getExpensesMonth() {
  let sun = 0,
      n;

  for (let i = 0; i < 2; i++) {
    
    expenses[i] = prompt("Введите обязательную статью расходов?");
    
    
    do {
      n = prompt("Во сколько это обойдется?");
    } while (!isNumber(n));
    sun += +n;
    
  }
  return sun;
}

let expensesAmount = getExpensesMonth();

console.log(expensesAmount); 

function getAccumulatedMonth(monthMoney, expenses) {
  if (!expenses) {
    expenses = 0;
  }
  return monthMoney - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
console.log(accumulatedMonth);

function getTargetMonth(targetMission, budjetMonth) {
  return Math.ceil(targetMission / budjetMonth);
}
console.log(getTargetMonth(mission, accumulatedMonth));

let targetMonth = getTargetMonth(mission, accumulatedMonth);

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);

(targetMonth >= 0) ? 
console.log("Цель будет достигнута за " + targetMonth + " месяца") : 
console.log("Цель не будет достигнута");


function getStatusIncome() {
  if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (1200 > budgetDay && budgetDay >= 600) {
    console.log("У вас средний уровень дохода");
  } else if (600 > budgetDay && budgetDay >= 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  } else {
    console.log("Что то пошло не так");
  }
}
getStatusIncome();