import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/components/nav/nav.service';

const Music = {
  COMIC: 'https://lucas7yoshi.sfo2.cdn.digitaloceanspaces.com/tempogg.ogg.mp3',
  END: 'assets/Fortnite_The_End_Event_Music.mp3',
  FESTIVE: 'assets/Fortnite_Festive_Music.mp3',
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public music;
  // public eventDate = new Date('2020-12-01T21:00:00.000Z');
  // public endDate = new Date('2020-12-01T21:10:00.000Z');
  public eventDate = new Date('2020-11-01T21:00:00.000Z');
  public endDate = new Date('2020-11-01T21:10:00.000Z');
  // public season5 = new Date('2020-12-02T09:00:00.000Z');
  public season5 = new Date();

  public countdown: string;
  public class = '';
  public canShowTilted = false;

  constructor(private navBarService: NavService) { }

  public ngOnInit(): void {
    this.music = Music.COMIC;
    this.startUpdating();
  }

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
      const msTillEndDate = this.endDate.getTime() - now;
      const msTillSeason5 = this.season5.getTime() - now;

      // Time calculations for days, hours, minutes and seconds.
      const days = Math.floor(msTillEvent / (1000 * 60 * 60 * 24));
      const hours = Math.floor((msTillEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((msTillEvent % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((msTillEvent % (1000 * 60)) / 1000);
      const milliseconds = Math.floor((msTillEvent % (1000)) / 1000);

      // If there is 1 hour or less to event change music to the end. Also make text orange.
      if (days === 0 && hours <= 1) {
        this.music = Music.END;
        this.class = 'orange';
      }

      // Set the countdown to the days, hours, minutes, and seconds all together and formatted.
      this.countdown = `${days}D ${hours}H ${minutes}M ${seconds}S ${milliseconds}MS`;

      // If the count down is over, write some text;
      if (msTillEvent <= 0) {
        clearInterval(interval);
        this.countdown = '!WARNING! The Devourer of Worlds is in Range';
        this.class = 'red';
      }

      if (msTillEndDate <= 0) {
        clearInterval(interval);
        this.countdown = 'To Be Continued...';
        this.class = 'blue';
      }

      if (msTillSeason5 <= 0) {
        clearInterval(interval);
        this.canShowTilted = true;
        this.music = Music.FESTIVE;
        this.countdown = 'Welcome to Season 15! Tilted Towers has Returned! (I hope) POGGERS!';
        this.class = 'blue';
      }


    }, 1000);
  }
}
