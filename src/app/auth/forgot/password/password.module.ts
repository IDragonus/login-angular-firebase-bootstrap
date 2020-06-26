import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule, PasswordRoutingModule, ReactiveFormsModule],
})
export class PasswordModule {}
