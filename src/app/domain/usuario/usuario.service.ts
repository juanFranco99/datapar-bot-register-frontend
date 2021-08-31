import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api = "http:/localhost:3000/bot/empresa/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsuarios(){
    return this.httpClient.get<Usuario[]>(this.api);
  }

  getUsuarioById(username){
    return this.httpClient.get<Usuario>(this.api + username);
  }
  
  addUsuario(usuario: Usuario){
    return this.httpClient.post<Usuario>(this.api, usuario);
  }

  updateUsuario(usuario: Usuario){
    return this.httpClient.put<Usuario>(this.api + usuario.username, usuario);
  }

  updatePerfil(usuario: Usuario){
    return this.httpClient.put<Usuario>(this.api + 'perfil/' + usuario.username, usuario);
  }

  deleteEmpresa(username){
    return this.httpClient.delete(this.api + username);
  }
}
