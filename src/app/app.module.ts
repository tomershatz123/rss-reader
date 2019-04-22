import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { SelectFeedComponent } from './select-feed/select-feed.component';
import { FeedResultsComponent } from './feed-results/feed-results.component';



@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    SelectFeedComponent,
    FeedResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
