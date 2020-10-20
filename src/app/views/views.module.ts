import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { TimeLinesComponent } from './time-lines/time-lines.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
// import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterNewComponent } from './character-new/character-new.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    SettingsComponent,
    HelpComponent,
    TimeLinesComponent,
    TimeLineComponent,
    CharactersComponent,
    CharacterComponent,
    CharacterNewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
