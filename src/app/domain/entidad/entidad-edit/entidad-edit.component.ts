import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from 'src/app/components/header/header.model';
import { Empresa } from '../../empresa/empresa.model';
import { EmpresaService } from '../../empresa/empresa.service';
import { Entidad } from '../entidad.model';
import { EntidadService } from '../entidad.service';

@Component({
  selector: 'app-entidad-edit',
  templateUrl: './entidad-edit.component.html',
  styleUrls: ['./entidad-edit.component.scss']
})
export class EntidadEditComponent implements OnInit {

  entidad = new Entidad();

  isModoEdicion: boolean = false;

  empresas: Empresa[] = [];

  ruta = "/entidad";

  titulo: string;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: EntidadService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.getEntidad();
    this.getEmpresas();
  }

  getEntidad() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const codigo = paramMap.get('codigo');

          if (codigo) {
            this.isModoEdicion = true;
            this.titulo = "Editar Entidad";
            this.service.getEntidad(codigo)
              .subscribe(
                (entidad) => {
                  this.entidad = entidad;
                  //entidad.telefono = entidad.telefono.replace("whatsapp: ", "");
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

  getEmpresas() {
    this.empresaService.getEmpresas()
      .subscribe(
        (empresas) => {
          this.empresas = empresas;
        },
        (err) => {
          console.error(err);
        }
      )
  }

  addEntidad() {
    //this.entidad.telefono = "whatsapp: " + this.entidad.telefono;
    this.service.addEntidad(this.entidad)
      .subscribe(
        () => {
          this.returnToList();
        },
        (error) => {
          console.error("Error al añadir + " + error)
        }
      )
  }

  updateEntidad() {
    //this.entidad.telefono = "whatsapp: " + this.entidad.telefono;
    this.service.updateEntidad(this.entidad)
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
