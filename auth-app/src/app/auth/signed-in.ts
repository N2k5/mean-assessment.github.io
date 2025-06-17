import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signed-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signed-in.html'
})
export class SignedInComponent implements OnInit, OnDestroy {
  username = '';
  timeRemaining = 8 * 60 * 60; // 8 hours in seconds
  private timer: any;
  private token = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Get user data from localStorage or service
    this.username = localStorage.getItem('username') || 'User';
    this.token = localStorage.getItem('token') || '';
    
    // Start the 8-hour countdown timer
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timeRemaining--;
      
      if (this.timeRemaining <= 0) {
        this.autoSignOut();
      }
    }, 1000); // Update every second
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  }

  onSignOut() {
    console.log('Sign out clicked');
    
    if (this.token) {
      this.authService.signOut(this.token).subscribe({
        next: (response: any) => {
          console.log('Sign out successful:', response);
          this.clearSession();
        },
        error: (error: any) => {
          console.log('Sign out error:', error);
          this.clearSession(); // Clear session even if backend call fails
        }
      });
    } else {
      this.clearSession();
    }
  }

  autoSignOut() {
    console.log('Session expired - auto signing out');
    this.clearSession();
  }

  clearSession() {
    // Clear stored data
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    
    // Clear timer
    if (this.timer) {
      clearInterval(this.timer);
    }
    
    // TODO: Navigate back to login page
    window.location.reload(); // Simple reload for now
  }
}
