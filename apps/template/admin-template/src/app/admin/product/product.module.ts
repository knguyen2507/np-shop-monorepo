import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule, authnGuard } from '@np-shop-monorepo/template/shared';
import { AgGridModule } from 'ag-grid-angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { ProductCreateFormComponent } from './create-form/create-form.component';
import { ProductDetailComponent } from './detail/detail.component';
import { ProductListComponent } from './list/list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'quan-ly/san-pham',
    component: ProductComponent,
    title: 'Sản Phẩm',
    data: {
      metadata: {
        pageTitle: 'Sản Phẩm',
      },
    },
    canActivate: [authnGuard],
  },
];

const components = [ProductComponent, ProductListComponent, ProductDetailComponent, ProductCreateFormComponent];

@NgModule({
  declarations: [...components],
  imports: [RouterModule.forRoot(routes), SharedModule, AgGridModule, LightgalleryModule],
  exports: [...components],
})
export class AdminProductModule {}