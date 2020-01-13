var a = prompt ("Введите число а");
var calc = prompt("Выберите действие: +, -, /, *");
var b = prompt ("Введите число b");
switch (calc) {
    case"+": calc = (+a)+(+b);
    break;
    case "-": calc = (+a)-(+b);
    break;
    case "/": calc = (+a)/(+b);
    break;
    case "*": calc = (+a)*(+b);
    break;
    default: alert ("Повторите действие");
    break;
}
alert ("Ваш результат:" + calc);

var calc1 = prompt("Выберите действие: +, -, /, *");
var c = prompt ("Введите число c");

switch (calc1) {
    case"+": calc1 = calc+(+c);
        break;
    case "-": calc1 = calc-(+c);
        break;
    case "/": calc1 = calc/(+c);
        break;
    case "*": calc1 = calc*(+c);
        break;
    default: alert ("Повторите действие");
        break;
}
alert ("Ваш результат:" + calc1);