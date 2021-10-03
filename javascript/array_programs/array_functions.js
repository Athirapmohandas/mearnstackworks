var arr=[2,3,4,5,6,7]
//square of each number  => Use  map function

// var squares=(num)=>num**2;
// var res=arr.map(squares)
// console.log(res);

// var cubes=arr.map(num=>num**3)
// console.log(cubes);
 

// filetr function
//-----------to print odd nos
// var odd=arr.filter(num=>num%2!=0);
// console.log(odd);

//Print squares of even nos
var even= arr.filter(num=>num%2==0).map(num=>num**2)
console.log(even);
//sum through reduce function
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);
//REDUCE FOR MAX ELEMENT
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);
//MINIMUM ELEMENT
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);


