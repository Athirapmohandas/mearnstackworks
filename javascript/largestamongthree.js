var num1=10, num2=10, num3=10;
if((num1>num2) & (num1>num3))
{
    console.log("num1 is largest");
}
else if((num2>num1) & (num2>num3))
{
    console.log("num2 is larger");
}
else if((num3>num1) & (num3 > num2))
{
    console.log(`${num3} is largest`);
}
else{
    console.log("Numbers are equal");
}