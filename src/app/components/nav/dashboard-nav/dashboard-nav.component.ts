import { Component } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { navLinks } from '../nav-bar/nav-links';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {

  constructor(private navBarService: NavBarService) { }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }

}
