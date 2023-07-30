import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './image/list/list.component';
import { NewComponent } from './image/new/new.component';
import { DetailsComponent } from './image/details/details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

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
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[DetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
