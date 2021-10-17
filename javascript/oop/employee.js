class Employee{
    constructor(eid,e_name,salary,desig){
        this.eid=eid;
        this.e_name=e_name;
        this.salary=salary;
        this.desig=desig;
    }
}
var emp1=new Employee(1000,"ram",25000, "developer")
var emp2=new Employee(1001,"ravi",23000, "developer")
var emp3=new Employee(1002,"raju",26000, "ba")


//print dveloper details
var employees=[];
employees.push(emp1,emp2,emp3);
//console.log(employees);
employees.filter(emp=>emp.desig=="developer").forEach(emp=>console.log(emp))


//sort employee objects based on salary asc
employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(employees);  // sort is mutable. Already existed array can be changed.

//getmax salary
var max=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1.salary:emp2.salary)
console.log(max);

