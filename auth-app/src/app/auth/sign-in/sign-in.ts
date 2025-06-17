import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signIn } from '../auth.actions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss'],
})
export class SignInComponent {
  @Output() signInSuccess = new EventEmitter<boolean>(); // New event emitter
  
  username = '';
  password = '';
  message = '';

  constructor(private store: Store, private authService: AuthService) {}

  onSignIn() {
    console.log('Sign In button clicked!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // Call the backend
    this.authService.signIn(this.username, this.password).subscribe({
      next: (response: any) => {
        console.log('Sign in successful!', response);
        
        // Store the token and username
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.username);
        
        this.message = 'Sign in successful! Welcome back!';
        
        // Emit the success event to parent component
        this.signInSuccess.emit(true);
        console.log('Emitted signInSuccess event');
      },
      error: (error: any) => {
        console.log('Sign in failed:', error);
        this.message = 'Sign in failed. Please check your credentials.';
      }
    });
  }
}
