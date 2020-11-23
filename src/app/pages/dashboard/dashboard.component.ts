import { Component } from '@angular/core';
import { NavService } from 'src/app/components/nav/nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public eventDate = new Date('2020-12-01T21:00:00.000Z');
  // public eventDate = new Date('Nov 23 2020 14:35:20');
  public countdown: string;

  constructor(private navBarService: NavService) { this.startUpdating(); }

  public toggleDrawer(): void {
    this.navBarService.drawer.toggle();
  }

  public startUpdating(): void {
    // Update the count down every 1 second
    const interval = setInterval(() => {

      // Get the current milliseconds.
      const now = new Date().getTime();

      // Find the milliseconds till now and the event.
      const msTillEvent = this.eventDate.getTime() - now;

      // Time calculations for days, hours, minutes and seconds.
      const days = Math.floor(msTillEvent / (1000 * 60 * 60 * 24));
      const hours = Math.floor((msTillEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((msTillEvent % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((msTillEvent % (1000 * 60)) / 1000);
      const milliseconds = Math.floor((msTillEvent % (1000)) / 1000);

      // Return the days, hours, minutes, and seconds all together and formatted.
      this.countdown = `${days}D ${hours}H ${minutes}M ${seconds}S ${milliseconds}MS`;

      // If the count down is over, write some text;
      if (msTillEvent <= 0) {
        clearInterval(interval);
        this.countdown = 'EXPIRED';
      }

    }, 1000);
  }
}
