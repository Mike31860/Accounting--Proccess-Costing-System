import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { OrderComponent } from './pages/order/order.component';
import { ExportToExcelComponent } from './pages/export-to-excel/export-to-excel.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { SubstractComponent } from './components/substract/substract.component';
import { CifaplicadosComponent } from './pages/cifaplicados/cifaplicados.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { TasaCifComponent } from './pages/tasa-cif/tasa-cif.component';
import { ListaTasaCifComponent } from './pages/lista-tasa-cif/lista-tasa-cif.component';
import { CifrealComponent } from "./pages/cifreal/cifrealComponent";
import { ListaCifRealesComponent } from './pages/lista-cif-reales/lista-cif-reales.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    CreateOrderComponent,
    OrderComponent,
    ExportToExcelComponent,
    AddComponent,
    SubstractComponent,
    CifaplicadosComponent,
    UsuarioComponent,
    TasaCifComponent,
    ListaTasaCifComponent,
    CifrealComponent,
    ListaCifRealesComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
