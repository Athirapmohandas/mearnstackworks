var d,num=123;
var sum=0;
while(num!=0)
{
    d=num%10;
    sum=sum+(d*d*d);
    num=parseInt(num/10);
}
console.log(sum);