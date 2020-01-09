import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'About', component: AboutComponent },
    { path: 'Help', component: HelpComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule
{

}