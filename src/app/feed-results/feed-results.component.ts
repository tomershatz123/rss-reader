import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-results',
  templateUrl: './feed-results.component.html',
  styleUrls: ['./feed-results.component.css']
})
export class FeedResultsComponent implements OnInit {
  feedItemsObservable = null;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedItemsObservable = this.feedService.feedItems$;
  }

}
