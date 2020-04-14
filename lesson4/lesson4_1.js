/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число
от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих
свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число
превышает 999, необходимо выдать соответствующее сообщение с помощью console.log
и вернуть пустой объект.
*/
var userNumber;

//сама программа
do {
    userNumber = prompt('Введите число от 0 до 999');
} while (isNaN(userNumber) || +userNumber < 0);
console.log(getObject(userNumber));

//функция
function getObject(number) {
    var object = {}
    // +99, 99+ и т.п. проходят предыдущие проверки, поэтому добавил ещё одну
    if (+number > 999 || number.indexOf('+') != -1) {
        console.log('Вы ввели некорректное число ')
        return object
    }
    if (number.length > 1) {
        var massNumber = number.split('');
        if (massNumber.length == 3) {
            object.units = +massNumber[2];
            object.dozens = +massNumber[1];
            object.hundreds = +massNumber[0];
        }
        else {
            object.units = +massNumber[1];
            object.dozens = +massNumber[0];
            object.hundreds = 0;
        }
    }
    else {
        object.units = +number;
        object.dozens = 0;
        object.hundreds = 0;
    }
    return object;
}


//Другой вариант функции.
function getObject(number) {
    var object = {}
    if (+number > 999 || number.indexOf('+') != -1) {
        console.log('Вы ввели некорректное число ')
        return object
    }
    var massNumber = [0,0,0]
    while(number) {
        massNumber[massNumber.indexOf(0)] = +number % 10;
        number = number.slice(0, -1);
    }
    object.units = massNumber[0];
    object.dozens = massNumber[1];
    object.hundreds = massNumber[2];
    return object
}
