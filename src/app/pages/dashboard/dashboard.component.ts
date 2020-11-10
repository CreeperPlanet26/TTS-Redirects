import { Component } from '@angular/core';
import { NavBarService } from 'src/app/components/nav/nav-bar/nav-bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private navBarService: NavBarService) { }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }

}
