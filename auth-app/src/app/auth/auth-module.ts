import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in';
import { SignUpComponent } from './sign-up/sign-up';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
