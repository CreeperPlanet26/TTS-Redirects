import { Component } from '@angular/core';
import { NavService } from 'src/app/components/nav/nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private navBarService: NavService) { }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }

}
