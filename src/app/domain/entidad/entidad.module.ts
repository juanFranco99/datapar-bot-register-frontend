import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadListComponent } from './entidad-list/entidad-list.component';
import { EntidadEditComponent } from './entidad-edit/entidad-edit.component';
import {TableModule} from 'primeng/table';
import { EntidadService } from './entidad.service';
import { EntidadRoutingModule } from './entidad-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderModule } from 'src/app/components/header/header.module';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule, Dialog} from 'primeng/dialog';



@NgModule({
  declarations: [
    EntidadListComponent,
    EntidadEditComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    EntidadRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    HeaderModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers:[
    EntidadService,
    ConfirmationService,
    Dialog
  ]
})
export class EntidadModule { }
