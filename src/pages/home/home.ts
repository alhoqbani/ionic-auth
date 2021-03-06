import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtl: NavController, private authProvider: AuthProvider) {
  }

  onLogout() {
    this.authProvider.logOut();
    this.navCtl.setRoot('WelcomePage');
  }
}
