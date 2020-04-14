var event, ok, answersArry = [], questionsArry = [];

displayWindow(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        displayWindow(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                displayWindow(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                displayWindow(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        displayWindow(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                displayWindow(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие
                displayWindow(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

/*
2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n
(номер задается пользователем)
*/

do {
    answer = prompt('Хотите посмотерть какой-нибудь ход с ответом?\n' +
    'Да - введите номер хода\n Нет - нажмите "отмена"');
    if (+answer > 0 && +answer <= answersArry.length && Number.isInteger(+answer)) {
        getMove(answer)
        /* вариант исключительно для этой игры
        switch (+answer) {
            case 1:
                alert(
                    Object.values(works)[0] + '-> ' +
                    (Object.values(works)[(answersArry[(+answer - 1)]) + 1]).slice(4)
                );
                break;
            case 2:
                if (mass[0] == 1) {
                    alert(
                        Object.values(works)[4] + '-> ' +
                        (Object.values(works)[(answersArry[(+answer - 1)] + 5)]).slice(4)
                    );
                }
                else if (mass[0] == 2) {
                    alert(
                        Object.values(works)[8] + '-> ' +
                        (Object.values(works)[(answersArry[(+answer - 1)] + 10)]).slice(4)
                    );
                }
                break;
            case 3:
                alert(
                    Object.values(works)[12] + '-> ' +
                    (Object.values(works)[(answersArry[(+answer - 1)]) + 13]).slice(4)
                );
                break;
            default:
            alert('Спасибо за игру')
        }*/
    }
    else if (String(answer).toLowerCase() == 'отмена' || !answer) {
        break;
    }
    else {
        alert('Некорректная команда');
        continue;
    }
} while(true) // если пользователь жмёт "отмена", цикл обрывается, т.к. answer = null


//------------------------------------------
//универсальная функция в случае рассширения игры
// TODO: можно чутка скорректировать все функции, чтоб работали с размыми играми
function getMove(userAnswer) {
    var q = Object.values(works).indexOf(questionsArry[(+userAnswer - 1)])
    var a = q + 1 + answersArry[(+userAnswer - 1)]
    alert(
        Object.values(works)[q] + '-> ' +
        (Object.values(works)[a]).slice(4)
    );
}

function displayWindow(gameWindow, firstStep, secondStep, steps) {
    do {
        ok = false;
        event = +prompt(gameWindow + firstStep + secondStep + '-1 - Выход из игры');
        questionsArry.push(gameWindow);
        answersArry.push(event);
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(steps, event);
        }
    } while (!ok);
}

function isAnswer(q, event) {
    if (event >= 1 && event <= q && Number.isInteger(event)) {
        return true;
    }
    alert('Нет такого варианата. Попробуйте снова');
    return false;
}
