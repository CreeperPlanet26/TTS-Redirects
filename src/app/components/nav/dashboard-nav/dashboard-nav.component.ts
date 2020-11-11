import { Component } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss',]
})
export class DashboardNavComponent {

  constructor(public navBarService: NavBarService) {
    navBarService.setClass();
  }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }

}
