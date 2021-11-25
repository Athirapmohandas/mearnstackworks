

class Bank {
    createAccount() {
        let first_name = fname.value;
        let acno = accno.value;
        let password = pwd.value;
        let bal =Number(balance.value) ;
        let transactions=[]
        console.log(first_name, acno, password);
        let user = {
            first_name, acno, password, bal,transactions
        }
        localStorage.setItem(acno, JSON.stringify(user));
        alert("account created");
        location.href = "./login.html"
    }
    validateAccount(accno) {
        return accno in localStorage ? true : false;
    }
    authenticate() {
        let accno = acno.value;
        let paswd = password.value;
        if (this.validateAccount(accno)) {
            let data = JSON.parse(localStorage.getItem(accno));
            if (paswd == data.password) {
                sessionStorage.setItem("user", accno);
                alert("authentication success");
                location.href = "./homepage.html"
            }
            else {
                alert("authentication failed");
            }
        }
        else {
            alert("account number does not exist");
        }

    }
    logout() {
        sessionStorage.removeItem("user")
        location.href = "./login.html"

    }
    balanceEnquiry() {
        // let accno = JSON.parse(sessionStorage.getItem("user")) // no use of parse here
        // let data = JSON.parse(localStorage.getItem(accno));
        // let amount = data.bal
        //alert(amount)
        let mydiv = document.createElement("div");
        mydiv.innerHTML = `<br><br><br>Available balance${this.getBalance()}`;
        document.querySelector("body").append(mydiv);

    }
    getBalance() {
        let accno = JSON.parse(sessionStorage.getItem("user")) // no use of parse here
        let data = JSON.parse(localStorage.getItem(accno));
        return data.bal
    }
    fundTransfer() {
        alert("transaction completed");
        let to_account = to_acno.value;
        let c_account = to_cc.value;
        let amount = amt.value;
        if (to_account == c_account) {
            if (this.validateAccount(to_account)) {
                if (Number(this.getBalance()) > amount) {

                    let user_acno = sessionStorage.getItem("user");
                    let payee_details = this.getAccountDetails(user_acno);
                    let receiver_details = this.getAccountDetails(c_account);
                    receiver_details["bal"] += Number(amount);
                    localStorage.setItem(c_account, JSON.stringify(receiver_details));
                    payee_details["bal"] -= Number(amount);
                    localStorage.setItem(user_acno, JSON.stringify(payee_details));
                    this.paymentHistory(to_account,amount)



                }
                else {
                    alert("insufficient balance")
                }
            }
            else {
                alert("invalid account number")
            }
        }
        else {
            alert("account number mismatch")
        }
        this.close();
    }
    close(){
        location.href="./homepage.html";
    }
    getAccountDetails(accno) {
        return JSON.parse(localStorage.getItem(accno));
    }
    paymentHistory(acno,amt){
        let user_acno = sessionStorage.getItem("user");
        let send_details = this.getAccountDetails(user_acno);
        send_details.transactions.push({ "to": acno, "amount": amt });
        localStorage.setItem(user_acno,JSON.stringify(send_details));


    }




}
var bank = new Bank();





// function authenticate() {
//     //console.log(acno,password);
//     acno=document.querySelector("#acno").value;
//     paswd=document.querySelector("#password").value;
//     if (acno in localStorage) {
//         data = JSON.parse(localStorage.getItem(acno));
//         if (paswd== data.password) {
//             console.log("authentication success");
//         }
//         else {
//             console.log("failed");
//         }
//     }
//     else {
//         console.log("account number does not exist");
//     }

// }




// //         console.log(user);
// //         localStorage.setItem(acno,JSON.stringify(user));
// //         var item=localStorage.getItem(1234);
// //         JSON.parse(item)
// //         //localStorage.JSON.parse(getItem(1001));
// //         //localStorage.getItem(1001).JSON.stringify(user);

// //         //local and session storage 

// //     }
// // }
// // var bank=new Bank();



// function validateAccount(accno){
//     if(accno in localStorage){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// // console.log(validateAccount(1000));

// function getBalance(accno){
//     if(validateAccount(accno)){
//         let bal=JSON.parse(localStorage.getItem(accno));
//         return bal.balance
//     }
//     else{
//         return false;
//     }
// }
// //console.log(getBalance(1000));

// function authenticate(accno,paswd){
//          if(validateAccount(accno)){
//              data=JSON.parse(localStorage.getItem(accno));
//              password=data.pwd
//             if(password==paswd){
//                 console.log("authentication success");
//             }
//             else{
//                 console.log("failed");
//             }
//          }
//          else{
//              console.log("account number does not exist");
//          }

// }
// authenticate(1001,"abc");

// function fundTransfer(from_ac,to_ac,amount){
//        if(validateAccount(to_ac)){
//            data=JSON.parse(localStorage.getItem(accno));

//        }

// }





// // /localStorage.setItem("token","abc123")
// // undefined
// // localStorage.getItem("username")
// // 'admin'
// // localStorage.removeItem("username")
// // undefined
// // localStorage.clear()
// // undefined

// // xml,json data conversion format
// // JSON.stringify(user)  ==>to save in local storage
// // JSON.parse(GETITEM(KEY)) ==> retrivve from local storage