import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private viewCtl: ViewController) {
  }

  onLogin() {
  }

  onCancel() {
    this.viewCtl.dismiss();
  }

}
