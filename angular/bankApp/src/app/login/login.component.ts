import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    aim="Bank Application"
    msg="Account Numer Please"
    accno="";
    pswd="";
    loginForm=this.fb.group({
      accno:[''],
      pswd:['']
    })
    
  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.accno=event.target.value
    console.log(this.accno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }
  
// login(a:any,p:any){
//   var accno=a.value;
//    var pswd=p.value
//    let db=this.data;
//    if(this.accno in db){
//         if(pswd==db[accno]["pswd"]){
//           alert("login successful!!!")
//         }
//         else{
//           alert("Invalid Password!!")
//         }
//    }
//    else{
//      alert("User does not exist !!")
//    }

//   }
// }


//   login(){
//    var accno=this.accno
//    var pswd=this.pswd
//    let db=this.ds.data;
//    if(this.accno in db){
//         if(pswd==db[accno]["pswd"]){
//           alert("login successful!!!")
//           this.router.navigateByUrl('homepage')
//         }
//         else{
//           alert("Invalid Password!!")
//         }
//    }
//    else{
//      alert("User does not exist !!")
//    }

//   }

// }
login(){
  var accno=this.loginForm.value.accno
  var pswd=this.loginForm.value.pswd
  
  if(this.loginForm.valid){
    var result=this.ds.login(accno,pswd)
    if(result){
      alert("login successful")
      this.router.navigateByUrl('homepage')
    }
  }
  

}}

