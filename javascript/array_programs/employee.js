var employees=[
    [1000,'ram',15000,'hr',1990,2000],
    [1001,'ravi',25000,'hr',1989,2005],
    [1002,'akhil',30000,'developer',2000,2010],
    [1003,'nikil',35000,'developer',2010,2015],
    [1004,'ajesh',35000,'mrkt',1991,2010],
    [1005,'tom',40000,'ba',1990,2015],
    [1006,'jack',32000,'ba',2001,2010]
]
//print no of employees
console.log(employees.length);
var count=0;
//print no of developers
// for(let employee of employees){
//     if(employee[3]=='developer')
//     {count++}

// }
// console.log(count);

//experience
// for(let employ of employees){
//     console.log("exp",employ[5]-employ[4]);
// }

//highest salary
var high_salary=0;
for(let employee of employees){

    if(high_salary<employee[2]){
       high_salary=employee[2];

    }
}
console.log("high salary",high_salary);

//lowest salary
var low_salary=employees[0][2];
for(let employee of employees){

    if(low_salary>employee[2]){
       low_salary=employee[2];

    }
}
console.log("low salary",low_salary);

//print name of dewveloper whose salary is max

var emp_name=employees.map((emp)=>emp[1])
console.log(emp_name);