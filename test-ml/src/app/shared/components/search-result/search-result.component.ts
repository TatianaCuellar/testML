import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Products} from "../../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() search: Products | any;
  @Input() textDefault = '';
  @Output() isDetail: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateForId(id: string) {
    this.isDetail.emit(false);
    this.router.navigate(['/item'], {queryParams: {id: id}})
  }
}
