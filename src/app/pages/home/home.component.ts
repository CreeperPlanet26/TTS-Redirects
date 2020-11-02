import { Component } from '@angular/core';
import { NavBarService } from 'src/app/components/nav-bar/nav-bar.service';
import { navLinks } from 'src/app/components/nav-bar/nav-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './animation.scss']
})
export class HomeComponent {
  public links = navLinks;

  constructor(private navBarService: NavBarService) { }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }
}
