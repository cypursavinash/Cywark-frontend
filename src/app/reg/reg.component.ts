import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  registerUrl = 'http://localhost:5001/register'

  constructor(public http:HttpClient) {


    
  }

    user='';
    email='';
    pass='';
    cpass='';
    mob='';
    btn1='';
    
  

  ngOnInit() {
  }

  register()
    {
      var name=this.user;
      var id=this.email;
      var pass1=this.pass;
      var pass2=this.cpass;
      var no=this.mob;
      var btn=this.btn1;
   console.log("Name:-" +name);
   console.log("Email-Id:-" +id);
   console.log("Password:-" +pass1);
   console.log("Confirm-Password:-" +pass2);
   console.log("Mobile-number:-" +no);
   console.log("data will be inserted" +btn);

   let registerData = {
    "userName":this.user,
    "userPassword":this.pass,
    "userPassword1":this.cpass,
    "userEmail":this.email,
    "userPhone":this.pass
  }
   
   this.http.post(this.registerUrl,registerData)
   .toPromise()
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log("Error",err);
    })

    }

}
