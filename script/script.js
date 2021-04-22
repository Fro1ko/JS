"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
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
  mission: 1000000,
  period: 6,
  asking: function () {
    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      appData.expenses[prompt('Введите обязательную статью расходов?')] = (() => {
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