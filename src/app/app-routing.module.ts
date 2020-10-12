import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './views/help/help.component';

import { HomeComponent } from './views/home/home.component';
import { MemberComponent } from './views/member/member.component';
import { MembersComponent } from './views/members/members.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SettingsComponent } from './views/settings/settings.component';
import { TimeLineComponent } from './views/time-line/time-line.component';
import { TimeLinesComponent } from './views/time-lines/time-lines.component';


const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'member', component: MemberComponent },
  { path: 'time-lines', component: TimeLinesComponent },
  { path: 'time-line', component: TimeLineComponent },
  { path: 'help', component: HelpComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
