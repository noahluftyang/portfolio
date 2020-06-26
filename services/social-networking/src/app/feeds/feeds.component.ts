import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaService } from '../core/services/mod';

@Component({
  selector: 'app-feeds-page',
  styleUrls: ['feeds.component.css'],
  templateUrl: 'feeds.component.html',
})
export class FeedsComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  feeds: any[];

  constructor(private mediaService: MediaService) {}

  // ngOnInit() {
  //   this.querySubscription = this.mediaService.readFeeds().subscribe(
  //     data => {
  //       console.log(data);
  //       this.feeds = [{ id: 1 }, { id: 2 }, { id: 3 }];
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  // ngOnDestroy() {
  //   this.querySubscription.unsubscribe();
  // }
}
