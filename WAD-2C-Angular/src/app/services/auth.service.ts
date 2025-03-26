import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signup(username: string, password: string): boolean {
    // Check if the user already exists
    if (localStorage.getItem(username)) {
      return false; // User already exists
    }
    // Store user credentials
    localStorage.setItem(username, JSON.stringify({ password }));
    return true;
  }

  signin(username: string, password: string): boolean {
    const storedUser = localStorage.getItem(username);
    if (!storedUser) return false; // User not found

    const userData = JSON.parse(storedUser);
    return userData.password === password; // Validate password
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
