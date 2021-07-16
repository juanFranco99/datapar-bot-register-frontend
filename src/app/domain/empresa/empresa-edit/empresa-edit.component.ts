import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa.model';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.scss']
})
export class EmpresaEditComponent implements OnInit {

  isModoEdicion: boolean = false;

  ruta = "/empresa";

  empresa: Empresa = new Empresa();

  titulo: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: EmpresaService
  ) { }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const codigo = paramMap.get('codigo');

          if (codigo) {
            this.isModoEdicion = true;
            this.titulo = "Editar Empresa";
            this.service.getEmpresa(codigo)
              .subscribe(
                (empresa) => {
                  this.empresa = empresa;
                  console.log(this.empresa);
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          } else {
            this.titulo = "Crear Entidad";
          }

        }
      )
  }

  addEmpresa() {
    this.service.addEmpresa(this.empresa)
      .subscribe(
        () => {
          console.log(this.empresa);
          this.returnToList();
        },
        (error) => {
          console.error("Error al añadir + " + error)
        }
      )
  }

  updateEmpresa() {
    this.service.updateEmpresa(this.empresa)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Eror al actualizar " + erro);
        }
      )
  }

  returnToList() {
    this.router.navigate([this.ruta]);
  }

}
