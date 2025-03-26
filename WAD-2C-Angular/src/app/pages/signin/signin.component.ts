import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignin(): void {
    if (this.authService.signin(this.username, this.password)) {
      localStorage.setItem('loggedInUser', this.username);
      this.message = "Signin successful! Redirecting...";
      setTimeout(() => this.router.navigate(['/dashboard']), 1500);
    } else {
      this.message = "Invalid username or password!";
    }
  }
}
