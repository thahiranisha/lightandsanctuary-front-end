import {Component, OnInit} from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import {Router} from "@angular/router";
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  username: string = 'user';

  isCollapsed = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded: any = jwtDecode(token); // ✅ fixed
      this.username = decoded?.sub || 'user';
    }
  }
  logout(): void {
    // Clear any stored tokens or user data here
    localStorage.clear(); // or sessionStorage.clear();

    // Navigate to login or landing page
    this.router.navigate(['/login']);
  }

  saveJournalEntry(): void {
    // Your journal saving logic here
  }

  toggleSidebar() {
    console.log(this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }

}

