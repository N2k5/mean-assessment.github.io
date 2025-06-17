import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './auth/sign-in/sign-in';
import { SignUpComponent } from './auth/sign-up/sign-up';
import { SignedInComponent } from './auth/signed-in';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SignInComponent, SignUpComponent, SignedInComponent],
  templateUrl: './app.component.html',  // This should now work
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auth-app';
  isSignedIn = false;

  ngOnInit() {
    console.log('AppComponent loaded!');
    
    // Check if user is already signed in
    const token = localStorage.getItem('token');
    if (token) {
      this.isSignedIn = true;
    }
  }

  onSignInStatusChange(signedIn: boolean) {
    this.isSignedIn = signedIn;
  }
}
