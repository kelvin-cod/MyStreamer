import { Results } from './../../shared/interfaces/Results';
import { List } from '../../shared/interfaces/List';
import { Component, OnInit } from '@angular/core';
import { StreamerService } from 'src/app/shared/services/streamer/streamer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
 movies: Results[] = [];
  constructor(private streamerService: StreamerService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.streamerService.list().subscribe((objs) => {
      this.movies = objs;
      console.log(this.movies);
    });
  }
}
