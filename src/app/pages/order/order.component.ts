import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from 'src/app/components/add/add.component';
import { SubstractComponent } from 'src/app/components/substract/substract.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = [
    'id',
    'manoDeObra',
    'materialDirecto',
    'cif',
    'date',
    'baseAsignacion',
    'tasa',
    'totalCostoOrder',
  ];
  data = ELEMENT_DATA;

  constructor(private dialog: MatDialog, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      (resp) => {
        this.orders = resp;
        console.log(this.orders);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  add(propiedadLabel: string, order: Order, propiedadNombre: string) {
    console.log(order);
    let orderTemp = order;
    let dialogRef = this.dialog.open(AddComponent, {
      data: { propiedadLabel },
    });
    let quantity;
    dialogRef.afterClosed().subscribe((resut) => {
      quantity = resut;
      if (!quantity) {
        quantity = 0;
      }
      console.log(quantity);
      orderTemp[propiedadNombre] =
        Number(orderTemp[propiedadNombre]) + Number(quantity);
        order.totalCostoOrder=order.cif+order.materialDirecto+order.manoDeObra;
      this.orderService.updateOrder(orderTemp).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  edit(propiedadLabel: string, order: Order, propiedadNombre: string) {
    console.log(order);
    let orderTemp = order;
    let dialogRef = this.dialog.open(AddComponent, {
      data: { propiedadLabel },
    });
    let quantity;
    dialogRef.afterClosed().subscribe((resut) => {
      quantity = resut;
      if (!quantity) {
        quantity = 0;
      }
      console.log(quantity);
      orderTemp[propiedadNombre] =
        Number(quantity);
      this.orderService.updateOrder(orderTemp).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  substract(propiedadLabel: string, order: Order, propiedadNombre: string) {
    console.log(order);
    let orderTemp = order;
    let dialogRef = this.dialog.open(AddComponent, {
      data: { propiedadLabel },
    });
    let quantity;
    dialogRef.afterClosed().subscribe((resut) => {
      quantity = resut;
      console.log(quantity);
      orderTemp[propiedadNombre] =
        Number(orderTemp[propiedadNombre]) - Number(quantity);
      this.orderService.updateOrder(orderTemp).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
