import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import {  UserModel } from '../shared/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup;
  user: UserModel;
  constructor(private authservice: AuthService, private fb: FormBuilder, private router: Router) {
    this.user = new UserModel();
   }

  ngOnInit(): void {
    this.createRegisterUserForm();
  }

  register(): void
  {
      this.authservice.registerUser(this.registerUserForm.value.email, this.registerUserForm.value.password)
        .then(() => {
          console.log('user registered');
          this.router.navigate(['/auth/login']);
        }).catch(error => {
          console.log(error);
        });
  }

  createRegisterUserForm(): void {
     this.registerUserForm = this.fb.group({
       email : new FormControl(this.user.email , Validators.required),
       password : new FormControl(this.user.password , Validators.required)
   });
  }

}
