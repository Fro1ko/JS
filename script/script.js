"use strict";

let money = Number(prompt("Ваш месячный доход?")); 
let income = "фриланс";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 1000000;
let period = 6;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase());

console.log(addExpenses.split(","));


let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = Number(prompt("Во сколько это обойдется?"));
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = Number(prompt("Во сколько это обойдется?"));

let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);

console.log(Math.ceil(mission / budgetMonth));

let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} else if (1200 > budgetDay && budgetDay >= 600) {
  console.log("У вас средний уровень дохода");
} else if (600 > budgetDay && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что то пошло не так");
}