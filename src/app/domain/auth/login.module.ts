import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ButtonModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    AuthService,
    MessageService
  ]
})
export class LoginModule { }
