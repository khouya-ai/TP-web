import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // Helper method to access form controls easily
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      this.errorMessage = 'Invalid login or password. Please try again.';
      return;
    }

    const { login, password } = this.loginForm.value;

    this.usersService.checkCredentials(login, password).subscribe({
      next: (isValid:boolean) => {
        if (isValid) {
          this.usersService.authenticateUser();
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid login or password. Please try again.';
        }
      },
      error: () => {
        this.errorMessage = 'An error occurred. Please try again later.';
      },
    });
  }
}
