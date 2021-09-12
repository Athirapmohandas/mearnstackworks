var num1 = 30, num2 = 20, num3 = 60;
var first, second, third;
//var num1=10, num2=10, num3=10;
if ((num1 < num2) & (num1 < num3)) {
    first = num1;
    if (num2 < num3) {
        second = num2;
        third = num3;
    }
    else {
        second = num3;
        third = num2
    }
}
else if ((num2 < num1) & (num2 < num3)) {
    first = num2;
    if (num1 < num3) {
        second = num1;
        third = num3;
    }
    else {
        second = num3;
        third = num1;
    }
}
else if ((num3 < num1) & (num3 < num2)) {
    first = num3;
    if (num1 < num2) {
        second = num1;
        third = num2;
    }
    else {
        second = num2;
        third = num1;
    }
}
else {
    console.log("Numbers are equal");
}
console.log(first,second,third);