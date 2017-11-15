import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private modalCtl: ModalController) {
  }

  signup() {
    const signupModal = this.modalCtl.create(SignupPage);

    signupModal.present();
  }

  login() {
    const loginModal = this.modalCtl.create(LoginPage);

    loginModal.present();
  }
}
