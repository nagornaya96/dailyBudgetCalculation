let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null)
            && a != '' && b != '' && a.length < 50) {
            console.log('done')
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
        }
    };
}
chooseExpenses();


/*
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null)
        && a != '' && b != '' && a.length < 50) {
        console.log('done')
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
    }

    i++;

}
*/

/*
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null)
        && a != '' && b != '' && a.length < 50) {
        console.log('done')
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
    }

    i++;
} while (i < 2);
*/


// Расчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на 1 жень составляет ' + appData.moneyPerDay + 'руб.');
}
detectDayBudget();

// Расчет уровня достатка
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка')
    } else {
        console.log('Произошла ошибка')
    }
}



function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSaving();
