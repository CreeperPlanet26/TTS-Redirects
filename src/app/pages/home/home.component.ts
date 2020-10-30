import { Component } from '@angular/core';
import { NavBarService } from 'src/app/components/nav-bar/nav-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private navBarService: NavBarService) { }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }
}
