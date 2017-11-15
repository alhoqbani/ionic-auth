import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private viewCtl: ViewController,
              private navCtl: NavController,
              private loadCtl: LoadingController,
              private alertCtl: AlertController,
              private fb: FormBuilder,
              private authProvider: AuthProvider) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const value = this.signupForm.value;
    const loading = this.loadCtl.create({
      content: 'Singing Up...'
    });
    loading.present();
    this.authProvider.signupUser(value.email, value.password)
      .then(data => {
        loading.dismiss();
        this.navCtl.setRoot(HomePage);
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtl.create({
          title: 'Sign Up Failed',
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
