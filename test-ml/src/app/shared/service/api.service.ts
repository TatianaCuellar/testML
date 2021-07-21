import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Product, Products} from "../model/product.model";

/**
 * Consumo de API MELI
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Obteniendo resultados de una busqueda
   * @param param
   */
  getProductsSearch(param: string) {
    return this.http.get<Products>(`${environment.api.endpoints.search}${param}`)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  /**
   * Obteniendo el detalle de un producto
   * @param id
   */
  getProductForID(id: string) {
    return this.http.get<Product>(`${environment.api.endpoints.items}/${id}`)
      .toPromise()
      .then(data => {
        return data;
      });
  }


}
