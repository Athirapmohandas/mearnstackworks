var add=(num1,num2)=>{
    return num1*num2;
}
console.log(add(10,20));

var add=(num1,num2)=>num1+num2;
console.log(add(10,20));


var cube=(num1)=>num1**3
console.log(cube(10));

var sq=num1=>num1**2;
console.log(sq(2));

var isStartwithA=(name)=>name[0]=="A"?true:false;
console.log(isStartwithA("Arun"));

var isEven=(num1)=>num1%2==0?true:false;
console.log(isEven(2));


//mode function for subtraction

//(num1>num2)?num1-num2:num2-num1  //ternary operator for not giving negative values in  subtraction

var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1;
console.log(sub(10,20));

var largestAmongTwo=(num1,num2)=>num1>num2?num1:num2;
console.log(largestAmongTwo(2,8));