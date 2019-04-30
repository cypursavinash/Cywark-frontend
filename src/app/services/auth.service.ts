import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional
import * as firebase  from "firebase";

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import { User } from './user.model';
@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public auth:AngularFireAuth
) {   
    // Get the auth state, then fetch the Firestore user document or return null
    
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //       // Logged in
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       // Logged out
    //       return of(null);
    //     }
    //   })
    // )
  }
  // async googleSignin() {
  //   const provider = new auth.GoogleAuthProvider();
  //   const credential = await this.afAuth.auth.signInWithPopup(provider);
  // }
  googleSignin()
  {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result);
      var token = result.credential['accessToken'];
      console.log(token);
      // The signed-in user info.
      var user = result.user;
      console.log(user);
          var userName = user.displayName;
      var emailAddress=user.email;
      console.log(  userName);
      console.log(emailAddress);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(credential);
    });
  }
  }