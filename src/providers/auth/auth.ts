import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor() {
  }

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

}
