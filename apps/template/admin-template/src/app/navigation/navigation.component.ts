import { Component } from '@angular/core';
import { environment } from '@np-shop-monorepo/template/environment';
import { AuthenticationService } from '@np-shop-monorepo/template/shared';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(private readonly authService: AuthenticationService) {}

  product = 'san-pham';
  brand = 'nhan-hang';
  category = 'danh-muc';
  user = 'tai-khoan';

  onClick() {
    window.location.href = `${environment.adminHost}/quan-ly`;
  }

  redirect_page(item: string) {
    window.location.href = `${environment.adminHost}/quan-ly/${item}`;
  }

  logout() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.authService.logout().subscribe();
    }
    window.location.href = `${environment.adminHost}/dang-nhap`;
    localStorage.removeItem(`accessToken`);
  }
}
