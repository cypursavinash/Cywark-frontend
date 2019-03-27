import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
user='';
pass11='';
  login()
  {
   var  email=this.user;
   var key=this.pass11;
   console.log("user" +email);
   console.log("pass" +this.pass11);
   
  }
  
  constructor() { }

  ngOnInit() {
  }

}
