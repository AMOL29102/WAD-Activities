import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup(): void {
    if (this.authService.signup(this.username, this.password)) {
      this.message = "Signup successful! Redirecting...";
      setTimeout(() => this.router.navigate(['/signin']), 1500);
    } else {
      this.message = "User already exists!";
    }
  }
}
