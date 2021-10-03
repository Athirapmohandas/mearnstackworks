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
// console.log(employees.length);
// var count=0;
// //print no of developers
// // for(let employee of employees){
// //     if(employee[3]=='developer')
// //     {count++}

// // }
// // console.log(count);

// //experience
for(let employ of employees){
    console.log(`${employ[1]}, experience :`,employ[5]-employ[4]);
}

// //highest salary
var high_salary=0;
for(let employee of employees){

    if(high_salary<employee[2]){
       high_salary=employee[2];

    }
}
console.log("high salary",high_salary);

// //lowest salary
var low_salary=employees[0][2];
for(let employee of employees){

    if(low_salary>employee[2]){
       low_salary=employee[2];

    }
}
console.log("low salary",low_salary);


// var emp_name=employees.map((emp)=>emp[1])
// console.log(emp_name);


//print name of dewveloper whose salary is max
var salary=0,name1;
for (let employee of employees){
    if(employee[3]=="developer")
    {
        if(salary<employee[2]){
        salary=employee[2];
        name1=employee[1]
        }
        
    }
}
console.log("high salaried developer:",name1);

//print name of highest experience employee
var exp=0,name1;
for (let employee of employees){
    if(exp<(employee[5]-employee[4])){
        exp=(employee[5]-employee[4])
        name1=employee[1]
    }

}
console.log("high experienced employee:",name1);

//total salary of developer
var sum=0;
for(let employee of employees){
    if(employee[3]=="developer"){
        sum+=employee[2]
    }
}
console.log("sum of salaries of developer:",sum);

//developer detail using filter
var developers= employees.filter(emp=>emp[3]=='developer')
console.log(developers);

//print names of ba
var analyst=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
console.log(analyst);

//print developer names whose exp>6 yrs)
var names=employees. filter(emp=>(emp[3]=="developer") & ((emp[5]-emp[4])>6)).map(emp=>emp[1]);
console.log(names);

//add bonus 5000 rs for developers
var bonus= employees.filter(emp=>emp[3]=="developer").map (emp=>emp[2]+5000)
console.log(bonus);

// sort employee wrt exp asc des
employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
console.log(employees);
//desc
employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
console.log(employees);
//sort emp wrt salary
employees.sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(employees);
//sort developer wrt salary
var employ=employees.sort((emp1,emp2)=>emp1[2]-emp2[2]).filter(emp=>emp[3]=="developer")
console.log(employ);