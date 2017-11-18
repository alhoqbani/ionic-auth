import { Injectable } from '@angular/core';

import firebase, { User } from 'firebase';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class AuthProvider {
  private currentUserSubject = new BehaviorSubject<User>(null);
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {
  }

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  setUser(user: User) {
    if (user !== null) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    } else {
      this.currentUserSubject.next(null);
      this.isAuthenticatedSubject.next(false);
    }
  }

  logOut() {
    firebase.auth().signOut();
  }

}
