import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

import { MediaService } from '../services/mod';

@Component({
  selector: 'app-feeds-page',
  styleUrls: ['feeds.component.scss'],
  templateUrl: 'feeds.component.html',
})
export class FeedsComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  private userSubscription: Subscription;

  constructor(private firebaseAuth: AngularFireAuth, public mediaService: MediaService) {
    // this.userSubscription = firebaseAuth.authState.subscribe(async user => {
    //   if (user) {
    //     console.log(user.displayName);
    //     const token = await user.getIdToken();
    //     console.log(token);
    //     return;
    //   }
    //   router.navigateByUrl('/accounts/login');
    // });
  }

  ngOnInit(): void {
    this.mediaService.feeds();
  }

  ngOnDestroy(): void {
    //   this.querySubscription.unsubscribe();
    // this.userSubscription.unsubscribe();
  }
}
