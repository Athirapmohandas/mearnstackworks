var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

//sort wrt balance
accounts.sort((num1,num2)=>num1[3]-num2[3])
console.log(accounts);
//print details of acno=1004
accounts.filter(item=>item[0]==1004).forEach(item=>console.log(item))

//is any person with balance<2000
var is_person=accounts.some(item=>item[3]<2000)
console.log(is_person);
//name of users with active account
accounts.filter(item=>item[4]==true).forEach(item=>console.log(item))
// max balnce user detail
var max_savings=accounts.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
console.log("max savings",max_savings);
//acctype+savings&balance>25000
accounts.filter(item=>(item[0]==1004)& (item[3]>25000)).forEach(item=>console.log(item))

