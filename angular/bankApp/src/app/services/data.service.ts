import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any={
    1000:{accno:1000,uname:"Ram",pswd:"abc",balance:5000},
    1001:{accno:1001,uname:"Rahul",pswd:"abc1",balance:5000},
    1002:{accno:1002,uname:"Ramu",pswd:"abc2",balance:5000}
  }
  constructor() { }
  register(accno:any,uname:any,pswd:any,balance:any){
    let db=this.data;
    if(accno in db){
      return false;
    }
    else{
      db[accno]={accno,uname,pswd,balance}
      return true;
    }

  }
  login(accno:any,pswd:any){
    let db=this.data;
    if(accno in db){
      if(pswd==db[accno]["pswd"]){
        // alert("login successful!!!")
        return true;
      }
      else{
        alert("Invalid Password!!")
        return false;
      }
 }
 else{
   alert("User does not exist !!");
   return false;
 }

  }

 deposit(acno:any,pswd:any,amt:any){
   var amount=parseInt(amt);
   let database=this.data;
   if(acno in database){
     if(pswd==database[acno]["pswd"]){
       database[acno]["balance"]+=amount;
       return database[acno]["balance"];
     }
     else{
       alert("invalid password");
       return false;
     }
   }
   else{
     alert("User does not Exist");
     return false;
   }
 }
withdraw(acno:any,pswd:any,amt:any){
var amount=parseInt(amt);
   let database=this.data;
   if(acno in database){
     if(database[acno]["balance"]>amount){
     if(pswd==database[acno]["pswd"]){
       database[acno]["balance"]-=amount;
       return database[acno]["balance"];
     }
     else{
       alert("invalid password");
       return false;
     }
   }
  else{
    alert("insuffiecient balance")
  }}
   else{
     alert("User does not Exist");
     return false;
   }
  
}
}