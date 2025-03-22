import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      login: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // Helper method to access form controls easily
  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.registerForm.invalid) {
      this.errorMessage = 'Invalid login, name or password. Please try again.';
      return;
    }

    const { login, name, password } = this.registerForm.value;

    this.usersService.addUser({login, name, password}).subscribe({
      next: (res) => {
        if (res) {
          console.log("res", res);
          this.router.navigate(['/login']);
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
