import { Component, OnInit } from '@angular/core';
import { cifService } from 'src/app/services/cifTasa.service';
import { cifTasa } from 'src/app/model/cifTasa.model';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from 'src/app/components/add/add.component';
import { SubstractComponent } from 'src/app/components/substract/substract.component';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-lista-tasa-cif',
  templateUrl: './lista-tasa-cif.component.html',
  styleUrls: ['./lista-tasa-cif.component.scss'],
})
export class ListaTasaCifComponent implements OnInit {
  cifs: cifTasa[] = [];
  displayedColumns: string[] = ['id', 'valorI'];
  constructor(
    private dialog: MatDialog,
    private cifssService: cifService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cifssService.getAllCifTasa().subscribe(
      (resp) => {
        this.cifs = resp;
        console.log(this.cifs);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  add(propiedadLabel: string, ciff: cifTasa, propiedadNombre: string) {
    console.log(ciff);
    let orderTemp = ciff;
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
      orderTemp[propiedadNombre] = +Number(quantity);
      this.cifssService.updateTasaCif(orderTemp).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  elegir(propiedadLabel: string, ciff: cifTasa, propiedadNombre: string) {
    let ordersCollection: Order[];
    this.orderService.getAllOrders().subscribe(
      (orders) => {
        ordersCollection = orders;
        orders.forEach((order) => {
          order.tasa = ciff.valorI;
          order.tasaCifAplicados=ciff.valorI*order.baseAsignacion;
          this.orderService.updateOrder(order).subscribe(
            (update) => {
              console.log(update);
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (error) => {
        console.log('Ha habido un error');
      }
    );

   
  }

  eliminarCif(propiedadLabel: string, ciff: cifTasa, propiedadNombre: string) {
    let ordersCollection: Order[];
    this.orderService.getAllOrders().subscribe(
      (orders) => {
        ordersCollection = orders;
        orders.forEach((order) => {
          order.tasa = ciff.valorI;
          order.tasaCifAplicados=ciff.valorI*order.baseAsignacion;
          this.orderService.updateOrder(order).subscribe(
            (update) => {
              console.log(update);
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (error) => {
        console.log('Ha habido un error');
      }
    );

   
  }


  substract(propiedadLabel: string, cit: cifTasa, propiedadNombre: string) {
    console.log(cit);
    let orderTemp = cit;
    let dialogRef = this.dialog.open(AddComponent, {
      data: { propiedadLabel },
    });
    let quantity;
    dialogRef.afterClosed().subscribe((resut) => {
      quantity = resut;
      console.log(quantity);
      orderTemp[propiedadNombre] =
        Number(orderTemp[propiedadNombre]) - Number(quantity);
      this.cifssService.updateTasaCif(orderTemp).subscribe(
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
