import { Component, OnInit } from '@angular/core';
import { AddComponent } from 'src/app/components/add/add.component';
import { Order } from 'src/app/model/order.model';
import { SubstractComponent } from 'src/app/components/substract/substract.component';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cifaplicados',
  templateUrl: './cifaplicados.component.html',
  styleUrls: ['./cifaplicados.component.scss'],
})
export class CifaplicadosComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = [
    'id',
    'baseAsignacion',
  ];

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
      orderTemp[propiedadNombre] = Number(quantity);
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
    let dialogRef = this.dialog.open(SubstractComponent, {
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
