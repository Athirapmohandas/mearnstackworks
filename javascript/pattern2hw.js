var num=3,sum=0;
var res="";
for(let i=1;i<=num;i++)//i=1 i=2
{
    res+=num;       //res=03 , 033, 0333
    sum=sum+parseInt(res);//03, 03+33, 03+33+333
}
console.log(sum);

// 2+22
//3+33+333
// //var res=0,sum=0;
// for(let i=1)
// {
//     res=res*10+num;
//     sum+=res;
// }