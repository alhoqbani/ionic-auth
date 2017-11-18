import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { firebaseConfig } from '../config/firebase-config';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'WelcomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authProvider: AuthProvider) {
    firebase.initializeApp(firebaseConfig);
    // firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user) => {
      authProvider.setUser(user);
    });
    authProvider.isAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.rootPage = 'HomePage'
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

