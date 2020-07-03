import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaService } from '../services/mod';

@Component({
  selector: 'app-explore-page',
  styleUrls: ['explore.component.scss'],
  templateUrl: 'explore.component.html',
})
export class ExploreComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  mediaList: any[];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.querySubscription = this.mediaService.mediaList().subscribe(
      data => {
        console.log(data);
        this.mediaList = [{ id: 1 }, { id: 2 }, { id: 3 }];
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
