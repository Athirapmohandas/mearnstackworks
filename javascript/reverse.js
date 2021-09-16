var sum=0
var d=0,num=123;
while(num!=0)
{
  d=num%10;
  sum=sum*10+d;
  num=parseInt(num/10);
}
console.log(sum);