import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Feature Component*/
import { PersonalDetailsComponent } from './personal-details-component/personal-details-component.component';
import { ContactDetailsComponent } from './contact-details-component/contact-details-component.component';
import { SkillsDetailsComponent } from './skills-details-component/skills-details-component.component';
import { WorkExperienceComponent } from './work-experience-component/work-experience-component.component';
import { SummaryComponent } from './summary-component/summary-component.component';

const routes: Routes = [
  { path: 'PersonalDetails', component: PersonalDetailsComponent },
  { path: 'ContactDetails', component: ContactDetailsComponent },
  { path: 'SkillsDetails', component: SkillsDetailsComponent },
  { path: 'WorkExperience', component: WorkExperienceComponent },
  { path: 'Summary', component: SummaryComponent },
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule
{

}