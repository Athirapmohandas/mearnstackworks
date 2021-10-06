//var sum=0

var num=123;
var res="";
while(num!=0)
{
  let d=num%10;
 // sum=sum*10+d;
   res+=d
  num=parseInt(num/10);
}
console.log(res);