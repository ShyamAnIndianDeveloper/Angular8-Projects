import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';


/* Feature Component*/
import { PersonalDetailsComponent } from './personal-details-component/personal-details-component.component';
import { ContactDetailsComponent } from './contact-details-component/contact-details-component.component';
import { SkillsDetailsComponent } from './skills-details-component/skills-details-component.component';
import { WorkExperienceComponent } from './work-experience-component/work-experience-component.component';
import { SummaryComponent } from './summary-component/summary-component.component';
import { NavbarComponent }    from './navbar/navbar.component';

/*Routing*/
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    SkillsDetailsComponent,
    WorkExperienceComponent,
    SummaryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
