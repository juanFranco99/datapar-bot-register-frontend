import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entidad } from './entidad.model';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  api = "https://dolphinbot-services.datapar.com.py/entidad/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getEntidades() {
    return this.httpClient.get<Entidad[]>(this.api);
  }

  getEntidad(codigo) {
    return this.httpClient.get<Entidad>(this.api + codigo);
  }

  addEntidad(entidad: Entidad) {
    return this.httpClient.post<Entidad>(this.api, entidad);
  }

  updateEntidad(entidad: Entidad) {
    return this.httpClient.put<Entidad>(this.api + entidad.codigo, entidad);
  }

  deleteEntidad(codigo) {
    return this.httpClient.delete(this.api + codigo);
  }
  
}
