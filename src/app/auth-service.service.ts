import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isSignedIn = false;

  constructor(public router: Router, public afAuth: AngularFireAuth) { 
    this.afAuth.user.subscribe(res=>{
      console.log(res)
      this.isSignedIn = true
    })
  }

  signInAuth(email, password){
    this.afAuth.signInWithEmailAndPassword(email, password).then(res=>{
      console.log(res)
      this.isSignedIn = true
      this.router.navigateByUrl("/home")
    })

    .catch(res=>{
      alert("Invalid Email Id or Password")
      this.isSignedIn = false
      this.router.navigateByUrl("/signin")
    })

    .finally();{
      return this.isSignedIn
    }
  }

  LogoutAuth(){
    this.isSignedIn = false
    this.afAuth.signOut()
    location.reload()
    this.router.navigateByUrl("/signin")
  }

  isUserSignedIn(){
    return this.isSignedIn
  }
}
