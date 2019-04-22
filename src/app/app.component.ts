import { Component } from '@angular/core';
import { FeedService } from './feed-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rssAddress = 'http://www.ynet.co.il/Integration/StoryRss1854.xml';

  constructor (private feedService: FeedService) {}

  private refreshFeed() {
    this.feedService.getFeedContent(this.rssAddress);
  }

}
