import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './image/list/list.component';
import { NewComponent } from './image/new/new.component';
import { DetailsComponent } from './image/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  entryComponents:[DetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
