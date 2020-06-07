import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaService } from '../core/services/mod';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  mediaList: any[];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.querySubscription = this.mediaService.readMedia().subscribe(
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
