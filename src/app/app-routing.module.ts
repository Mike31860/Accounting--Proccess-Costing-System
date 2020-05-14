import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { OrderComponent } from './pages/order/order.component';
import { ExportToExcelComponent } from './pages/export-to-excel/export-to-excel.component';
import { CifaplicadosComponent } from './pages/cifaplicados/cifaplicados.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { TasaCifComponent } from './pages/tasa-cif/tasa-cif.component';
import { ListaTasaCifComponent } from './pages/lista-tasa-cif/lista-tasa-cif.component';
import { CifrealComponent } from "./pages/cifreal/cifrealComponent";
import { ListaCifRealesComponent } from './pages/lista-cif-reales/lista-cif-reales.component';



const routes: Routes = [
  {
    path: 'createOrder',
    component: CreateOrderComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'cifaplicados',
    component: CifaplicadosComponent,
  },
  {
    path: 'tasacif',
    component: TasaCifComponent,
  },
  {
    path: 'listaTasasCif',
    component: ListaTasaCifComponent,
  },
  {
    path: 'cifReal',
    component: CifrealComponent,
  },
  {
    path: 'cifRealLista',
    component: ListaCifRealesComponent,
  },
  {
    path: 'user',
    component: UsuarioComponent,
  },
  {
    path: 'exportToExcel',
    component: ExportToExcelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
