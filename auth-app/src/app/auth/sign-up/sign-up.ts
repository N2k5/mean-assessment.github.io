import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from '../auth.actions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss'],
})
export class SignUpComponent {
  username = '';
  password = '';
  message = ''; // For showing success/error messages

  constructor(private store: Store, private authService: AuthService) {}

  onSignUp() {
    console.log('Sign Up button clicked!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // Call the backend
    this.authService.signUp(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Sign up successful!', response);
        this.message = 'Sign up successful! You can now sign in.';
      },
      error: (error) => {
        console.log('Sign up failed:', error);
        this.message = 'Sign up failed. Please try again.';
      }
    });
  }
}
