import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [AuthService],
})
export class PasswordComponent implements OnInit {
  userEmail = new FormControl('');
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onResetPassword() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Email sent, check you inbox!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
