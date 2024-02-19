import { NgModule } from '@angular/core';
import { SharedModule } from '@np-shop-monorepo/template/shared';
import { AppStoreModule } from '@np-shop-monorepo/template/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrandModule } from './shop/brand/brand.module';
import { CategoryModule } from './shop/category/category.module';
import { DetailProductModule } from './shop/detail-product/detail-product.module';
import { HomeModule } from './shop/home/home.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BrandModule,
    AppStoreModule,
    CategoryModule,
    DetailProductModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
