import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { Entidad } from '../entidad.model';
import { EntidadService } from '../entidad.service';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html',
  styleUrls: ['./entidad-list.component.scss']
})
export class EntidadListComponent implements OnInit {

  entidades: Entidad[] = [];

  titulo = "Listado de Entidades";

  ruta = "/entidad";

  display: boolean = false;

  loading: boolean = true;
  constructor(
    private entidadService: EntidadService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
    this.getEntidades();
    this.loading = false;
  }

  getEntidades() {
    this.entidadService.getEntidades()
      .subscribe(
        (entidades) => {
          this.entidades = entidades;
          console.log(this.entidades);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  deleteEntidad(codigo) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar esta entidad?',
      accept: () => {
        this.entidadService.deleteEntidad(codigo)
          .subscribe(
            (res) => {
              console.log("eliminado")
              this.getEntidades();
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
