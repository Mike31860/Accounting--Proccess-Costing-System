import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { cifReal } from '../model/cifReal.model';

@Injectable({
  providedIn: 'root',
})
export class cifRealService {
  private baseUrl: string = 'https://ordercost-6188a.firebaseio.com';

  constructor(private http: HttpClient) {}

  createtasaCif(cifReal: cifReal) {
    return this.http.post(`${this.baseUrl}/tasaCif.json`, cifReal).pipe(
      map((resp: any) => {
        cifReal.id = resp['name'];
        return cifReal;
      })
    );
  }

  updateTasaCif(cifReal) {
    const orderTem = {
      ...cifReal,
    };
    delete orderTem.id;

    return this.http.put(
      `${this.baseUrl}/tasaCif/${cifReal.id}.json`,
      orderTem
    );
  }

  getAllCifAplicados() {
    return this.http
      .get(`${this.baseUrl}/tasaCif.json`)
      .pipe(map((resp) => this.passToCollection(resp)));
  }

  passToCollection(ordersObject: object) {
    const cifsReal: cifReal[] = [];

    if (ordersObject === null) {
      return [];
    }

    Object.keys(ordersObject).forEach((key) => {
      const cifrea: cifReal = ordersObject[key];
      cifrea.id = key;
      cifsReal.push(cifrea);
    });

    return cifsReal;
  }
}
