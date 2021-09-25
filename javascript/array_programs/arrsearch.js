var arr=[14,11,10,13,10,11]
var flag=0


for (let num of arr)
{
    var flag=0;
    if(num==15)
    {
        flag++;
        break;
    }
    else{
        flag=0;
    }
}
if(flag==0){
    console.log("element not found");
}
else{
    console.log("element found");
}
