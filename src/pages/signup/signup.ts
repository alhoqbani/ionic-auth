import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private viewCtl: ViewController, private fb: FormBuilder) {
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
    console.log(value);
  }

  onCancel() {
    this.viewCtl.dismiss();
  }
}
