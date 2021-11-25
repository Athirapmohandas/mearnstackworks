import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  accno="";
  pswd="";
  amt="";
  accno1="";
  pswd1="";
  amt1="";
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var accno=this.accno;
    var pswd=this.pswd;
    var amt=this.amt;
    var result=this.ds.deposit(accno,pswd,amt)
    if(result){
      alert(`${amt} is credited!! New balance is ${result}`)
    }
    
  }
  withdraw(){
    var accno=this.accno1;
    
    var pswd=this.pswd1;
    var amt=this.amt1;
    var result=this.ds.withdraw(accno,pswd,amt)
    if(result){
      alert(`${amt} is debited!! New balance is ${result}`)
    }
  }
}
