import { Component } from '@angular/core';
import { NavService } from 'src/app/components/nav/nav.service';
import { navLinks } from 'src/app/components/nav/nav-links';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './animation.scss']
})
export class HomeComponent {
  public links = navLinks;

  constructor(private navBarService: NavService) { }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }

}


