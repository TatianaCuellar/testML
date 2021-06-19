import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/service/api.service";
import {Product} from "../../shared/model/product.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  responseItem: Product | any;
  constructor(public apiService: ApiService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(resp => {
      this.getItem(resp['id']);
    });
  }

  ngOnInit(): void {
  }

  getItem(id: string) {
    this.apiService.getProductForID(id).then(resp => {
      this.responseItem = resp;
    })
  }
}
