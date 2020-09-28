import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
