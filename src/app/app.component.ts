import { Component, OnInit } from '@angular/core';
import { StarWarService } from './star-wars.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  swService: StarWarService;
  constructor(swService: StarWarService) {
    this.swService = swService;
  }
  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
