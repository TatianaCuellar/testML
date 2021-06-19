import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'item', loadChildren: () => import('./pages/detail-product/detail-product.module').then(m => m.DetailProductModule) },
  { path: 'items', loadChildren: () => import('./shared/components/search-result/search-result.module').then(m => m.SearchResultModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
