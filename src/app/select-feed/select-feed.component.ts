import { Component } from '@angular/core';

import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-select-feed',
  templateUrl: './select-feed.component.html',
  styleUrls: ['./select-feed.component.css']
})
export class SelectFeedComponent {
  rssAddress = 'http://www.ynet.co.il/Integration/StoryRss1854.xml';

  constructor (private feedService: FeedService) {}

  private refreshFeed() {
    this.feedService.getFeedContent(this.rssAddress);
  }

}
