import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class FeedsService {
  private feeds = [];

  constructor(private http: HttpClient) {}

  readFeeds() {
    const test = this.http.get('/feeds').pipe(map((data) => console.log(data)));
    console.log(test);

    return this.feeds;
  }

  getFeeds() {
    return this.feeds;
  }
}
