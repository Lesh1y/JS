alert('Меняем а и b местами \nВыводим новую b')
var a = +prompt('Введите число a');
var b = +prompt('Введите число b');
b += a;
a = b - a;
b = b - a;
alert(b)
