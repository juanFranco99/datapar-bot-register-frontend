import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  api = "http:/localhost:3000/bot/empresa/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmpresas(){
    return this.httpClient.get<Empresa[]>(this.api);
  }

  getEmpresa(codigo){
    return this.httpClient.get<Empresa>(this.api + codigo);
  }
  
  addEmpresa(empresa: Empresa){
    return this.httpClient.post<Empresa>(this.api, empresa);
  }

  updateEmpresa(empresa: Empresa){
    return this.httpClient.put<Empresa>(this.api + empresa.codigo, empresa);
  }

  deleteEmpresa(codigo){
    return this.httpClient.delete(this.api + codigo);
  }
}
