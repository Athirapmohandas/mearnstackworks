class Bank {
    session = {};
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        }

    }
    getAccountDetails() {
        return this.accounts;
    }
    authenticate(accno, password) {
        if (accno in this.accounts) {
            let pwd = this.accounts[accno].password
            if (pwd == password) {
                this.session["user"] = accno;
                return 1;
            }
            else {
                return 0;
            }
            // return pwd==password?1:0; 
        }
        else {
            return -1;
        }
    }
    balanceEnquiry() {
        console.log("Balance", this.accounts[this.session["user"]].balance);

    }
    fundTransfer(to_accno, amount) {
        let user = this.session["user"]
        // this.to["to_acno"]=to_accno;
        //console.log(this.accounts[user1].balance);
        if (to_accno in this.accounts) {
            if ((this.accounts[user].balance) > amount) {
                this.accounts[user].balance -= amount;
                this.accounts[to_accno].balance += amount;
                console.log("from acc no:", this.accounts[user].acno, "to acc no:", to_accno, "amount", amount, "transfered successfully");
                this.accounts[user].transactions.push({ "to": to_accno, "amount": amount })
                console.log(this.accounts[user]);
            }
            else {
                console.log("insufficient balance");
            }
        }
        else {
            console.log("invalid account number");

        }
    }
    paymentHistroy(){
        user=this.session["user"]
       console.log(this.accounts[user].transactions);

    }
    gettransactions(){
        let transactions_history=[];
        for(let account in this.accounts){
            transactions_history.push(this.accounts[account].transactions)
        }
        return transactions_history;
    }


    creditTransaction(){
       let transactions=this.gettransactions();//nested array
       for(let trans of transactions){
           for(let tran of trans){
               if(tran.to==this.session["user"]){
                   console.log(tran);
               }
           }
       }
    }

}
var obj = new Bank();
//console.log(obj.accounts);
//console.log(obj.getAccountDetails());
var user = obj.authenticate(1001, "userone")
console.log(user == 1 ? "login success" : user == -1 ? "invalid accno" : "invalid password");
//obj.balanceEnquiry();
//obj.fundTransfer(1002, 2000)
//obj.balanceEnquiry();
//obj.paymentHistroy();
obj.creditTransaction();