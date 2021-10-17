var obj=new Set();// create ref of Set class
obj.add(10);
obj.add(20);
obj.add(10);
obj.add(10);
console.log(obj);


//TO FIND SUM OF ANY NO OF ARGUMENTS
function add(...args){
    return args.reduce((num1,num2)=>num1+num2);
    
}
console.log(add(10,20,30));


//TO FIND MAX FROM ANY NO OF ARFUMENTS
function getMax(...args){   //... (3 DOTS) IS SPREAD OPERATOR
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(10,20,30));
