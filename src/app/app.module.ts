import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableWithTabsComponent } from './table-with-tabs/table-with-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWithTabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
