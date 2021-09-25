var accounts=[
    [1000,'ram',15000,'savings'],
    [1001,'ravi',25000,'savings'],
    [1002,'raghu',30000,'current'],
    [1003,'rahul',40000,'savings']
]
// print names, balance>20000
for(let account of accounts){
    if(account[2]>20000){
        console.log(account[1]);
    }
}



// for(let account of accounts){
//     console.log(account[1]); //name
// }
// //print names whose account type= Savings
// for(let account of accounts){
//     if(account[3]=='savings'){
//         console.log(account[1]);
//     }
 
// }
