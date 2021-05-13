//1) Почему код даёт именно такие результаты?


var a = 1,
    b = 1,
    c, d;
c = ++a; // префиксный инкремент - a == 1; (++a)=> a == 2; (c = a)=> c == 2;
alert(c); // 2 
d = b++; //постфиксный инкремент - b == 1; (d = b)=> d == 1; (b++)=> b == 2;
alert(d); // 1 
c = (2 + ++a); // a == 2; (++a)=> a == 3; (c = 2 + a)=> c == 5;
alert(c); // 5
d = (2 + b++); // b == 2; (d = 2 + b)=> d == 4; (b++)=> b == 3;
alert(d); // 4
alert(a); // 3
alert(b); // 3

//2) Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); //5
alert("x = " + x);

//3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = +prompt("Введите любое целое число");
var b = +prompt("Введите ещё одно любое целое число");
if (a >= 0 && b >= 0) {
    alert(Math.abs(a - b));
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

//4) Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

var min = 0,
    max = 15;
var a = min + Math.random() * (max + 1 - min);
a = Math.floor(a);
alert("a = " + a);
switch (a) {
    case 0:
        document.write("0<br/>");
    case 1:
        document.write("1 <br/>");
    case 2:
        document.write("2 <br/>");
    case 3:
        document.write("3 <br/>");
    case 4:
        document.write("4 <br/>");
    case 5:
        document.write("5 <br/>");
    case 6:
        document.write("6 <br/>");
    case 7:
        document.write("7 <br/>");
    case 8:
        document.write("8 <br/>");
    case 9:
        document.write("9 <br/>");
    case 10:
        document.write("10 <br/>");
    case 11:
        document.write("11 <br/>");
    case 12:
        document.write("12 <br/>");
    case 13:
        document.write("13 <br/>");
    case 14:
        document.write("14 <br/>");
    case 15:
        document.write("15 <br/>");
}


// Рекурсия

function numout(a) {

    if (a === 15) {
        document.write("15 <br/>");
    } else {
        document.write(a + '; ');
        return numout(a + 1);
    }
}

var min = 0,
    max = 15;
var a = min + Math.random() * (max + 1 - min);
a = Math.floor(a);
alert("a = " + a);
numout(a);


// 5)Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function addition(a, b) {
    var m = a,
        n = b;
    return (m + n);
}

function subtr(a, b) {
    var m = a,
        n = b;
    return (m - n);
    // return (Math.abs(m - n));
}

function multipl(a, b) {
    var m = a,
        n = b;
    return (m * n);
}

function division(a, b) {
    var m = a,
        n = b;
    return (m / n);
}



// 6)Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation)

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            var res = addition(arg1, arg2);
            break;
        case '-':
            var res = subtr(arg1, arg2);
            break;
        case '*':
            var res = multipl(arg1, arg2);
            break;
        case '/':
            var res = division(arg1, arg2);
            break;
    }
    return res;

}

// document.write(mathOperation(5, 2, '*'));



//7) Сравнить null и 0. Попробуйте объяснить результат.


alert(typeof 0); // number
// 0 - относится числовому типу данных - number.

alert(typeof null); // object
// null - специальное значение, означает некую "пустоту", не относится ни к одному из типов, возврат типа object является ошибкой.



//8) С помощью рекурсии организовать функцию возведения числа в степень.

function power(val, pow) {
    if (pow === 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
alert(power(3, 5));