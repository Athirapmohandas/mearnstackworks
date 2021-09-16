var num=4;
var low=8,upp=27;
for(i=0;i<=upp;i++)
{
    let res=i**num;
    if(res>upp){break;}
    if((res>=low)&&(res<=upp)){
        console.log(i);
    }
}