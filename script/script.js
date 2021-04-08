"use strict";

let money = Number(prompt("Ваш месячный доход?")); 
let income = "фриланс";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 1000000;
let period = 6;

function showTypeOf(type) {
  console.log(type);
}
showTypeOf(typeof(money));
showTypeOf(typeof(income));
showTypeOf(typeof(deposit));

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(","));

let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = Number(prompt("Во сколько это обойдется?"));
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = Number(prompt("Во сколько это обойдется?"));

function getExpensesMonth(a, b) {
  if (!a) {
    a = 0;
  }
  if (!b) {
    b = 0;
  }
  return a + b;
}
console.log(getExpensesMonth(amount1, amount2)); 

function getAccumulatedMonth(monthMoney, expenses) {
  if (!expenses) {
    expenses = 0;
  }
  return monthMoney - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
console.log(accumulatedMonth);

function getTargetMonth(targetMission, budjetMonth) {
  return Math.ceil(targetMission / budjetMonth);
}
console.log(getTargetMonth(mission, accumulatedMonth));

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);

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