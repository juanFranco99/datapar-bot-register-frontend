import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { EmpresaService } from './empresa.service';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderModule } from 'src/app/components/header/header.module';
import {InputNumberModule} from 'primeng/inputnumber';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaEditComponent } from './empresa-edit/empresa-edit.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { Dialog } from 'primeng/dialog';



@NgModule({
  declarations: [
    EmpresaListComponent,
    EmpresaEditComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    EmpresaRoutingModule,
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
    EmpresaService,
    ConfirmationService,
    Dialog
  ]
})
export class EmpresaModule { }
