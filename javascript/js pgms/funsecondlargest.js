function secondLargest(num1,num2,num3)
{
    if((num1>num2) & (num1>num3))
{
    if(num2>num3){
        console.log(`${num2} is second largest`);
    }
    else{
        console.log(`${num3} is second largest`);
    }
}
else if((num2>num1) & (num2>num3))
{
    if(num1>num3){
        console.log(`${num1} is second largest`);
    }
    else{
        console.log(`${num3} is second largest`);
    }
}    
else if(num1>num2) {
    
        console.log(`${num1} is second largest`);
}
    else{
        console.log(`${num2} is second largest`);
    }

}
secondLargest(3,7,1)