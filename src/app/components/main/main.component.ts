import { Results } from './../../shared/interfaces/Results';
import { List } from '../../shared/interfaces/List';
import { Component, OnInit } from '@angular/core';
import { StreamerService } from 'src/app/shared/services/streamer/streamer.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  movies: Results[] = [];
  constructor(
    private streamerService: StreamerService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    /** spinner starts on init */
    this.spinner.show();
    this.streamerService.list().subscribe((objs) => {
      this.movies = objs;
      if (this.movies != null) {
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          //   this.movies = objs;
          this.spinner.hide();
        }, 1000);

      }

      // console.log(this.movies);
    });
  }
}
