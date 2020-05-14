import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { cifTasa } from '../model/cifTasa.model';

@Injectable({
  providedIn: 'root',
})
export class cifService {
  private baseUrl: string = 'https://ordercost-6188a.firebaseio.com';

  constructor(private http: HttpClient) {}

  createtasaCif(cifTasa: cifTasa) {
    return this.http.post(`${this.baseUrl}/tasaCif.json`, cifTasa).pipe(
      map((resp: any) => {
        cifTasa.id = resp['name'];
        return cifTasa;
      })
    );
  }

  updateTasaCif(tasaCif) {
    const orderTem = {
      ...tasaCif,
    };
    delete orderTem.id;

    return this.http.put(
      `${this.baseUrl}/tasaCif/${tasaCif.id}.json`,
      orderTem
    );
  }

  getAllCifTasa() {
    return this.http
      .get(`${this.baseUrl}/tasaCif.json`)
      .pipe(map((resp) => this.passToCollection(resp)));
  }

  passToCollection(ordersObject: object) {
    const cifs: cifTasa[] = [];

    if (ordersObject === null) {
      return [];
    }

    Object.keys(ordersObject).forEach((key) => {
      const order: cifTasa = ordersObject[key];
      order.id = key;
      cifs.push(order);
    });

    return cifs;
  }
}
