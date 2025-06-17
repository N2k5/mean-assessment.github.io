import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Added /auth prefix

  constructor(private http: HttpClient) {}

  signUp(username: string, password: string): Observable<any> {
    console.log('AuthService: Sending signup request to backend...');
    return this.http.post(`${this.apiUrl}/sign-up`, { username, password });
  }

  signIn(username: string, password: string): Observable<any> {
    console.log('AuthService: Sending signin request to backend...');
    return this.http.post(`${this.apiUrl}/sign-in`, { username, password });
  }

  signOut(token: string): Observable<any> {
    console.log('AuthService: Sending signout request to backend...');
    return this.http.post(`${this.apiUrl}/sign-out`, { token });
  }
}
