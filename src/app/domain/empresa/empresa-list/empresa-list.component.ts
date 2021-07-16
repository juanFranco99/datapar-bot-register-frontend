import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { Empresa } from '../empresa.model';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss']
})
export class EmpresaListComponent implements OnInit {

  empresas: Empresa[] = [];

  titulo = "Listado de Empresas";

  ruta = "/empresa";

  display: boolean = false;

  loading: boolean = true;

  constructor(
    private router: Router,
    private empresaService: EmpresaService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getEmpresas();
    this.loading = false;
  }

  getEmpresas() {
    this.empresaService.getEmpresas()
      .subscribe(
        (empresas) => {
          this.empresas = empresas;
          console.log(this.empresas);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  deleteEmpresa(codigo) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar esta empresa?',
      accept: () => {
        this.empresaService.deleteEmpresa(codigo)
          .subscribe(
            () => {
              this.getEmpresas();
            },
            (error) => {
              this.display = true;
            }
          )
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });

  }

}
