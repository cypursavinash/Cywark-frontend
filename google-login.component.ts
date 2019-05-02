import { Component, OnInit } from '@angular/core'; 
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
 @Component({
  selector: 'google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {
 
    user: Observable<firebase.User>;
  
    constructor(private afAuth: AngularFireAuth, 
                private gplus: GooglePlus,
                private platform: Platform,
                ) {
  
      this.user = this.afAuth.authState;
                  console.log(this.user);
    }
  
    /// Our login Methods will go here
  
    async nativeGoogleLogin(): Promise<any> {
      try {
        const gplusUser = await this.gplus.login({
          'webClientId': 'your-webClientId-XYZ.apps.googleusercontent.com',
          'offline': true,
          'scopes': 'profile email'
        })
    
        return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
    
      } catch(err) {
        console.log(err)
      }  
    }
    async webGoogleLogin(): Promise<any> {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        console.log(provider);
      } catch(err) {
        console.log(err);

      }
    
    }
    googleLogin() {
      console.log("you are in the function")
      if (this.platform.is('cordova')) {
        this.nativeGoogleLogin();
        console.log("working");
      } else {
        this.webGoogleLogin();
        console.log("working web");
      }
    }
    signOut() {
      console.log(this.user )
      this.afAuth.auth.signOut();
    }
  ngOnInit() {}
  }
