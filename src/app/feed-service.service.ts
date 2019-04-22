import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Feed } from './model/feed';
import { FeedEntry } from './model/feed-entry';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
  private feedItems: BehaviorSubject<FeedEntry[]>;
  public feedItems$: Observable<FeedEntry[]>;

  constructor(private http: Http) {
    this.feedItems = new BehaviorSubject<FeedEntry[]>([]);
    this.feedItems$ = this.feedItems.asObservable();
  }

  getFeedContent(url: string) {
    this.http.get(this.rssToJsonServiceBaseUrl + url)
      .pipe(
        map(this.extractFeeds),
        catchError(this.handleError))
      .subscribe(
        feed => this.feedItems.next(feed.items),
        error => alert('wrong url. please try again.')
      );
  }

  private extractFeeds(res: Response): Feed {
    const feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
