import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private viewCtl: ViewController, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const value = this.loginForm.value;
    console.log(value);
  }

  onCancel() {
    this.viewCtl.dismiss();
  }

}
