import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: any;
  accno: any;
  pswd: any;
  balance: any;
  registerForm=this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    accno:[''],
    pswd:[''],
    balance:['']
  })


  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }


  ngOnInit(): void {
  }
register(){
  var uname=this.registerForm.value.fname;
  var accno=this.registerForm.value.accno;
  var pswd=this.registerForm.value.pswd;
  var balance=this.registerForm.value.balance;

  if(this.registerForm.valid){
    var result=this.db.register(accno,uname,pswd,balance)
    if(result){
      alert("account created successfully!!!...please log In")
      this.router.navigateByUrl('')
      console.log(this.db.data);
      
      
    }
    else{
      alert("account already Exist!!! Please Log In")
      this.router.navigateByUrl(``)
    }
  }
  else{
    alert("invalid form")
  }
  
  
}


}
