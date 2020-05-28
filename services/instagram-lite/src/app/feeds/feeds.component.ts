import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FeedsService } from '../core/services/mod';

@Component({
  selector: 'app-feeds-page',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
})
export class FeedsComponent implements OnInit {
  constructor(
    private readonly feedsService: FeedsService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.feedsService.readFeeds();
  }
}
