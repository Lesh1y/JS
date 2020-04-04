// 1. Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксный инкремент выполняется первым
d = b++; alert(d);           // 1 постфиксный инкремент выполняется после всего
c = (2+ ++a); alert(c);      // 5 a уже равно 2 + аналогично первому примеру
d = (2+ b++); alert(d);      // 4 b уже равно 2 + аналогично второму примеру
alert(a);                    // 3 было 2 инкремента + изначальное значение
alert(b);                    // 3 аналогично пятому примеру


// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // 1+4=5 a при этом станет равна 4


// 3. Объявить две целочисленные переменные a и b и задать им произвольные
// начальные значения. Затем написать скрипт, который работает по следующему принципу:
var a = 4, b = -5;
if(a >= 0 && b >= 0){
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else {
    console.log(a + b);
}


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора
//switch организовать вывод чисел от a до 15
var a = (Math.random() * 15).toFixed(0);
switch(a) {
    case '0':
        console.log(0);
    case '1':
        console.log(1);
    case '2':
        console.log(2);
    case '3':
        console.log(3);;
    case '4':
        console.log(4);
    case '5':
        console.log(5);
    case '6':
        console.log(6);
    case '7':
        console.log(7);
    case '8':
        console.log(8);
    case '9':
        console.log(9);
    case '10':
        console.log(10);
    case '11':
        console.log(11);
    case '12':
        console.log(12);
    case '13':
        console.log(13);
    case '14':
        console.log(14);
    default:
        console.log(15);
}


// 5.  Реализовать основные 4 арифметические операции в виде функций с двумя
//параметрами.
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}


/* 6. Реализовать функцию с тремя параметрами: function
mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции. В зависимости от переданного значения
операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение
(использовать switch).*/
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            console.log(addition(arg1, arg2));
            break;
        case 'subtraction':
            console.log(subtraction(arg1, arg2));
            break;
        case 'multiplication':
            console.log(multiplication(arg1, arg2));
            break;
        case 'division':
            console.log(division(arg1, arg2));
            break;
        default:
            console.log('Некорректная операция');
    }
}
mathOperation(5, 7, 'multiplication');


// 7. Сравнить null и 0. Попробуйте объяснить результат.
console.log(null == 0); // False
console.log(null > 0); // False
console.log(null < 0); // False
console.log(null >= 0); // True
console.log(null <= 0); // True
/*Всё дело в том, что в JS алгоритм для >= выглядит так:

11.8.4 Оператор больше-или-равно ( >= )
Значение нетерминала ВыражениеОтношения : ВыражениеОтношения >=
ВыражениеСдвига вычисляется по следующей схеме:
1. Вычислить значение ВыраженияОтношения.
2. Вызвать ПолучитьЗначение(Результата(1)).
3. Вычислить значение ВыраженияСдвига.
4. Вызвать ПолучитьЗначение(Результата(3)).
5. Произвести сравнение Результат(2) < Результат(4) (см. раздел 11.8.5).
6. Если Результат(5) равен true или undefined - вернуть false. Иначе вернуть true.

источник - http://javascript.ru/ecma/part11#a-11.8.4
Есть интересная статья с полным ответом на этот вопрос:
https://habr.com/ru/company/ruvds/blog/337732/ - полезна для понимания ситуации
*/


// 8. С помощью рекурсии организовать функцию возведения числа в степень.
//Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow){
    if(pow == 0){
        return 1;
    }
    return val *= power(val, (pow-=1));
}
console.log(power(2, 10)); // подходит только для целых положительных степеней
