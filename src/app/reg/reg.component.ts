import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

    user='';
    email='';
    pass='';
    mob='';
    Register()
    {
      var name=this.user;
      var id=this.email;
      var pass1=this.pass;
      var no=this.mob;
   console.log("Name:-" +name);
   console.log("Email-Id:-" +id);
   console.log("Password:-" +pass1);
   console.log("Mobile-number:-" +no);
    }
  constructor() {


    
   }

  ngOnInit() {
  }

}
