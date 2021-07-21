import {Component, Input, OnInit} from '@angular/core';

/**
 * Componente Breadcrumbs
 */
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  /**
   * Obteniendo las categorias del componente padre <header>
   */
  @Input() categories: any;
  constructor() { }

  ngOnInit(): void {
  }

}
