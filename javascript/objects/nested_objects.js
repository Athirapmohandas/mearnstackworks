var accounts={
    1001:{acno:1001,password:"userone",balance:5000},
    1002:{acno:1002,password:"usertwo",balance:7000},
    1003:{acno:1003,password:"userthree",balance:8000},
    1004:{acno:1001,password:"userone",balance:9000},
    
}


function login(accno,pswrd){
    if(accno in accounts){
      let pwd=accounts[accno].password
      if(pwd==pswrd){
          console.log("login success");
      }
      else{
          console.log("invalid password");
      }

    }
    else{
        console.log("invalid account number");
    }
}
login(1002,"userone")