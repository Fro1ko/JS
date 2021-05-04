"use strict";


let start1 = document.getElementById("start");
let incomePlus = document.getElementsByTagName("button")[0];
let expensesPlus = document.getElementsByTagName("button")[1];
let checkbox = document.querySelector("#deposit-check");
let allIncomeItem = document.querySelectorAll(".additional_income-item")[0];
let allIncomeItem1 = document.querySelectorAll(".additional_income-item")[1];
let budgetDay = document.getElementsByClassName("budget_day-value")[0];
let expensesMonth = document.getElementsByClassName("expenses_month-value")[0];
let additionalIncome = document.getElementsByClassName("additional_income-value")[0];
let additionalExpenses = document.getElementsByClassName("additional_expenses-value")[0];
let incomePeriod = document.getElementsByClassName("income_period-value")[0];
let targetMonth = document.getElementsByClassName("target_month-value")[0];

let salaryAmount = document.querySelector(".salary-amount");
let incomeItems = document.querySelector(".income-items");
let incomeAmount = document.querySelector(".income-amount");
let expensesItems = document.querySelector(".expenses-items");
let expensesAmount = document.querySelector(".expenses-amount");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let targetAmount = document.querySelector(".target-amount");
let periodSelect = document.querySelector('.period-select');



let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = (str, comma = false) => {
  let pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
};

let money;
do {
  money = prompt("Ваш месячный доход?");
} while (!isNumber(money));

let appData = {
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 1000000,
  period: 6,
  asking: function () {

    if (confirm("Есть ли у вас доп. заработок?")) {
      let itemIncome = "";
      let cashIncome = 0;
      do {
        itemIncome = prompt("какой у вас доп. заработок?");
      }
      while (!isString(itemIncome));

      do {
        cashIncome = prompt("сколько вы на этом зарабатываете?");
      }
      while (!isNumber(cashIncome));
      appData.income[itemIncome] = +cashIncome;
    }

    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      let str = "";
      do {
        str = prompt('Введите обязательную статью расходов?');
      } while (!isString(str));
      appData.expenses[str] = (() => {
        let n = 0;
        do {
          n = prompt('Во сколько это обойдется?');
        } while (!isNumber(n));
        return +n;
      })();
    }
  },
  getExpensesMonth: function () {
    appData.expensesMonth = 0;
    for (let el in appData.expenses) {
      appData.expensesMonth += appData.expenses[el];
    }

  },

  getBudget: function () {
    if (!appData.budget) {
      appData.budget = 0;
    }
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {

    if (appData.budgetDay >= 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (1200 > appData.budgetDay && appData.budgetDay >= 600) {
      console.log("У вас средний уровень дохода");
    } else if (600 > appData.budgetDay && appData.budgetDay >= 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    } else {
      console.log("Что то пошло не так");
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {

      do {
        appData.percentDeposit = prompt("какой годовой процент?");
      }
      while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt("какая сумма заложена?");
      }
      while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log(appData.expensesMonth);
let targetMonth = appData.getTargetMonth();
(targetMonth >= 0) ?
console.log("Цель будет достигнута за " + targetMonth + " месяца"): console.log("Цель не будет достигнута");
appData.getStatusIncome();

console.log('Наша программа включает в себя данные:');
for (let el in appData) {
  console.log(el, appData[el]);
}
appData.getInfoDeposit();

console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));