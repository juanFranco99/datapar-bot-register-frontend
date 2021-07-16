import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './components/menu/menu.component';

import { TableModule } from 'primeng/table';
import { EntidadListComponent } from './domain/entidad/entidad-list/entidad-list.component';
import { EntidadModule } from './domain/entidad/entidad.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './components/menu/menu.module';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './domain/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    MenuModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
