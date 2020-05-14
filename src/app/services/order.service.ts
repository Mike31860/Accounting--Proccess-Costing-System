import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl: string = 'https://ordercost-6188a.firebaseio.com';

  constructor(private http: HttpClient) {}

  createOrder(order: Order) {
    return this.http.post(`${this.baseUrl}/orders.json`, order).pipe(
      map((resp: any) => {
        order.id = resp['name'];
        return order;
      })
    );
  }

  updateOrder(order) {
    const orderTem = {
      ...order,
    };
    delete orderTem.id;

    return this.http.put(`${this.baseUrl}/orders/${order.id}.json`, orderTem);
  }

  getAllOrders() {
    return this.http
      .get(`${this.baseUrl}/orders.json`)
      .pipe(map((resp) => this.passToCollection(resp)));
  }

  passToCollection(ordersObject: object) {
    const orders: Order[] = [];

    if (ordersObject === null) {
      return [];
    }

    Object.keys(ordersObject).forEach((key) => {
      const order: Order = ordersObject[key];
      order.id = key;
      orders.push(order);
    });

    return orders;
  }
}
