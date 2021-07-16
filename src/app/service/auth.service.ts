import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../domain/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = "https://dolphinbot-services.datapar.com.py/login/";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: User){
    return this.httpClient.post(this.api, user);
  }

  userLogged(): Boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigate(['/login']);
  }

}
