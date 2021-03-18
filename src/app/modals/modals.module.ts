import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterProfileDialogComponent } from './character-profile-dialog/character-profile-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    CharacterProfileDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule
  ]
})
export class ModalsModule { }
