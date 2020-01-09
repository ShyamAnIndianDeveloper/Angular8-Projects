import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
