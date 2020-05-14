import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      materialDirecto: new FormControl('', [Validators.required]),
      manoDeObra: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required]),
      orderDate: new FormControl('', [Validators.required]),
      baseAsignacion: new FormControl('', [Validators.required]),
    });
  }

  createOrder() {
    if (!this.orderForm.invalid) {
      let order: Order = new Order();
      order.manoDeObra = this.orderForm.controls['manoDeObra'].value;
      order.materialDirecto = this.orderForm.controls['materialDirecto'].value;
      order.cif = this.orderForm.controls['cif'].value;
      order.date = this.orderForm.controls['orderDate'].value;
      order.baseAsignacion = this.orderForm.controls['baseAsignacion'].value;
      order.tasa=order.baseAsignacion*order.tasaCifAplicados
      order.totalCostoOrder=order.materialDirecto+order.cif+order.materialDirecto;
      console.log(order);
      this.orderService.createOrder(order).subscribe(
        (resp) => {
          console.log(resp);
          this.orderForm.reset();
          this.router.navigate(['order']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
