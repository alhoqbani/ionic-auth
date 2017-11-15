import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor() {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
