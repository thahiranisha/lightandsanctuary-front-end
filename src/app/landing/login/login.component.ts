import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.setMode('login');
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  setMode(mode: 'login' | 'signup') {
    this.isLogin = mode === 'login';
    this.errorMessage = null;

    if (this.isLogin) {
      // Login only needs username + password
      this.loginForm.get('username')?.setValidators([Validators.required, Validators.minLength(3)]);
      this.loginForm.get('email')?.clearValidators();
      this.loginForm.get('confirmPassword')?.clearValidators();
    } else {
      // Signup needs all fields
      this.loginForm.get('username')?.setValidators([Validators.required, Validators.minLength(3)]);
      this.loginForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.loginForm.get('confirmPassword')?.setValidators([Validators.required, Validators.minLength(6)]);
    }

    // Always call updateValueAndValidity on all controlled fields
    this.loginForm.get('username')?.updateValueAndValidity();
    this.loginForm.get('email')?.updateValueAndValidity();
    this.loginForm.get('confirmPassword')?.updateValueAndValidity();
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { username, email, password } = this.loginForm.value;

    if (this.isLogin) {
      // Login — backend expects username + password
      const body = { username, password };
      this.http.post(`${environment.apiBaseUrl}/api/users/login`, body)
        .subscribe({
          next: (response: any) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            this.errorMessage = err.error?.error || 'Login failed';
          }
        });
    } else {
      // Register — backend expects username + email + password
      const body = { username, email, password };
      this.http.post(`${environment.apiBaseUrl}/api/users/register`, body)
        .subscribe({
          next: () => {
            // Auto login after registration
            this.http.post(`${environment.apiBaseUrl}/api/users/login`, { username, password })
              .subscribe({
                next: (response: any) => {
                  localStorage.setItem('token', response.token);
                  this.router.navigate(['/dashboard']);
                },
                error: () => {
                  this.setMode('login');
                  this.errorMessage = 'Registered successfully. Please login.';
                }
              });
          },
          error: (err) => {
            this.errorMessage = err.error?.error || 'Registration failed';
          }
        });
    }
  }

  signupWithGoogle() {
    window.location.href = `${environment.apiBaseUrl}/oauth2/authorization/google`;
  }
}
