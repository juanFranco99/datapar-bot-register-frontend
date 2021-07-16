import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../usuario/usuario.model';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  

  constructor(
    private authService: AuthService,
    private route: Router,
    @Inject(DOCUMENT) private document: Document,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user)
    .subscribe(
      (res) =>{
        let token = res['token'];
        let usuario = res['usuario'];
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', usuario.username);
        this.document.location.href = window.location.origin + '/home';
      },
      (error) => {
        console.log('error');
        this.messageService.add({severity:'error', summary:'Error', detail:'Usuario o Contraseña incorrectos'});
      }
    )
  }  

}
