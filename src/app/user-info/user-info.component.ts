import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth} from  "@angular/fire/auth";
import * as firebase  from "@firebase/app";
 @Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public auth: AuthService) { }
  
  ngOnInit() {
  }

}
