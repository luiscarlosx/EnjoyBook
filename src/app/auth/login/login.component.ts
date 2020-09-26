import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: UserModel;
  constructor(private authservice: AuthService, private fb: FormBuilder, private router: Router) { 
    this.user = new UserModel();
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(): void
  {
      this.authservice.login(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          console.log('user login');
          this.router.navigate(['/']);
        }).catch(error => {
          console.log(error);
        });
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email : new FormControl(this.user.email , Validators.required),
      password : new FormControl(this.user.password , Validators.required)
  });
 }

  gotoRegister(): void {
    this.router.navigate(['/auth/register']);
  }

}
