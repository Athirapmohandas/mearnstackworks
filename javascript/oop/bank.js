class Bank{
    createAccount(name,accno,acc_type,min_bal){
        this.name=name;
        this.accno=accno;
        this.acc_type=acc_type;
        this.bal=min_bal;
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`Account number${this.accno} credited with ${amount}, Available balance${this.bal}`);
    }
    withdrawal(amount){
        if(this.bal>=amount){
            this.bal-=amount;
            console.log(`Account number ${this.accno} debiited with ${amount}, Available balance${this.bal}`);
        }
        else{
            console.log("Transaction failed.Insuffiecient Balance");
        }
    }
}

var obj=new Bank();
obj.createAccount("Ram",1001,"Savings",1000);
obj.deposit(4000);
obj.withdrawal(6000);