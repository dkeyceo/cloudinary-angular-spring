import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './image/list/list.component';
import { NewComponent } from './image/new/new.component';
import { DetailsComponent } from './image/details/details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  exports:[NgxSpinnerModule],
  entryComponents:[DetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
