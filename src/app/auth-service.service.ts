import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isSignedIn = false;
  constructor() { }

  signIn(email, password){
    this.isSignedIn= true
    return this.isSignedIn
  }
}
