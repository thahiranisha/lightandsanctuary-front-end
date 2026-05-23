import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="loading">Logging in with Google...</p>
    <p *ngIf="error">{{ error }}</p>
  `
})
export class CallbackComponent implements OnInit {
  loading = true;
  error: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);

      // ✅ Decode token and extract name
      const decoded: any = jwtDecode(token); // ✅ fixed
      const name = decoded?.sub || 'user';
      console.log("User's name from token:", name);

      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/signup']);
    }
  }
}
