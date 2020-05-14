import { Component, OnInit } from '@angular/core';
import { cifRealService } from 'src/app/services/cifReales.service';
import { cifReal } from 'src/app/model/cifReal.model';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from 'src/app/components/add/add.component';

@Component({
  selector: 'app-lista-cif-reales',
  templateUrl: './lista-cif-reales.component.html',
  styleUrls: ['./lista-cif-reales.component.scss']
})
export class ListaCifRealesComponent implements OnInit {
  cifsReales: cifReal[] = [];
  displayedColumns: string[] = ['id', 'Description', 'valorIm'];
  constructor( 
    private dialog: MatDialog,
    private cifssService: cifRealService,
   ) { }

  ngOnInit(): void {
    this.cifssService.getAllCifAplicados().subscribe(
      (resp) => {
        this.cifsReales = resp;
        console.log(this.cifsReales);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  add(propiedadLabel: string, ciff: cifReal, propiedadNombre: string) {
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

  substract(propiedadLabel: string, cit: cifReal, propiedadNombre: string) {
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
