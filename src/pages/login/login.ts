import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private viewCtl: ViewController,
              private navCtl: NavController,
              private loadCtl: LoadingController,
              private alertCtl: AlertController,
              private fb: FormBuilder,
              private authProvider: AuthProvider) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const value = this.loginForm.value;
    const loading = this.loadCtl.create({
      content: 'Checking ...'
    });
    loading.present();
    this.authProvider.loginUser(value.email, value.password)
      .then(data => {
        loading.dismiss();
        this.navCtl.setRoot(HomePage);
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtl.create({
          title: 'Login Failed',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

  onCancel() {
    this.viewCtl.dismiss();
  }

}
