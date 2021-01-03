import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { CharactersModule } from './characters/characters.module';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HelpComponent,
    PageNotFoundComponent,
    TimelineComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    CharactersModule
  ],
  exports: [
    HelpComponent,
    PageNotFoundComponent,
    TimelineComponent,
    HomeComponent
  ]
})
export class ViewsModule { }
