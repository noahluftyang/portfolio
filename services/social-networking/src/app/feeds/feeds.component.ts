import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MediaService } from '../core/services/mod';

@Component({
  selector: 'app-feeds-page',
  styleUrls: ['feeds.component.css'],
  templateUrl: 'feeds.component.html',
})
export class FeedsComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  private userSubscription: Subscription;
  feeds: any[];

  constructor(
    private firebaseAuth: AngularFireAuth,
    private mediaService: MediaService,
    router: Router
  ) {
    this.userSubscription = firebaseAuth.authState.subscribe(async user => {
      if (user) {
        console.log(user.displayName);
        const token = await user.getIdToken();

        console.log(token);
        return;
      }

      router.navigateByUrl('/accounts/login');
    });
  }

  async ngOnInit() {
    //   this.querySubscription = this.mediaService.readFeeds().subscribe(
    //     data => {
    //       console.log(data);
    //       this.feeds = [{ id: 1 }, { id: 2 }, { id: 3 }];
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );
  }

  ngOnDestroy(): void {
    //   this.querySubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
