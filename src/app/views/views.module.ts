import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { TimeLinesComponent } from './time-lines/time-lines.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
// import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    SettingsComponent,
    HelpComponent,
    TimeLinesComponent,
    TimeLineComponent,
    MembersComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
