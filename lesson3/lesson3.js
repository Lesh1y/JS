// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function sieve(n) {
    var array = [], limit = Math.sqrt(n), result = [];
    var i = 2;
    while(i < n) {
        array.push(true);
        i++;
    } // создал массив от 2 до n-1 в булевом виде

    i = 2;
    var j;
    while(i <= limit) {
        if(array[i]) {
            j = i * i;
            while (j < n) {
                array[j] = false;
                j += i;
            }
        }
        i++;
    } // удалил кратные 2, 3, 5, 7...

    // Все значения массива [i] true являются простыми числами
    i = 2;
    while(i < n){
        if(array[i]) {
            result.push(i);
        }
        i++;
    }
    return result;
};
console.log(sieve(100));


/* 2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи: */

// a) Организовать такой массив для хранения товаров в корзине;
basket = [];
function productAdd(n) {
    var i = 0;
    while(i < n) {
        p = {
            title: prompt('Введите наименование товара'),
            price: (Math.random() * 400 + 100).toFixed(0),
            count: +prompt('Введите кол-во товара')
        }
        basket.push(p);
        i++
    }
}
productAdd(+prompt('Введите кол-во позиций'));
console.log(basket);


// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice() {
    var sum = 0;
    for(var i = 0; i < basket.length; i++) {
        sum += basket[i].price * basket[i].count;
    }
    return sum;
}
console.log(countBasketPrice())


// 4. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for(var i = 0; i <= 9; console.log(i++)){}


// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке.
    var str = '';
    for(var i = 1; i <= 20; i++){
        str += 'x';
        console.log(str);
    }
