import { NgModule } from '@angular/core';
import { SharedModule } from '@np-shop-monorepo/template/shared';
import { AppStoreModule } from '@np-shop-monorepo/template/store';
import { AdminBrandModule } from './admin/brand/brand.module';
import { AdminCategoryModule } from './admin/category/category.module';
import { AdminHomeModule } from './admin/home/home.module';
import { AdminProductModule } from './admin/product/product.module';
import { AdminUserModule } from './admin/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    AppStoreModule,
    LoginModule,
    AdminBrandModule,
    AdminCategoryModule,
    AdminProductModule,
    AdminUserModule,
    AdminHomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
