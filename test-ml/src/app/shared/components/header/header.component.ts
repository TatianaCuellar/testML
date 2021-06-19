import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {FormControl} from "@angular/forms";
import {debounceTime, map} from "rxjs/operators";
import {Products} from "../../model/product.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  textDefault = '';
  isDetail = false;
  search = new FormControl;
  response: Products | any;
  constructor(
    public apiService: ApiService
  ) {
    /*this.search.valueChanges.pipe(
      debounceTime(500),
      map(rp => this.searchField(rp))
    ).subscribe();*/
  }

  ngOnInit(): void {

  }

  searchField(response: string) {
    this.textDefault = 'Cargando...'
    if (response.length > 3) {
      this.apiService.getProductsSearch(response).then(resp => {
        this.response = resp;
        this.textDefault = this.response.items.length === 0 ? 'Sin resultados' : '';
        this.isDetail = true;
      }).finally(() => {
        //this.textDefault = '';
      });
    }
  }

  onSubmit() {
    this.searchField(this.search.value);
  }

  updateisItem(ev: boolean) {
    this.isDetail = ev;
  }
}
