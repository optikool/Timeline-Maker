import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './character-form/character-form.component';
import { MaterialsModule } from '../materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharacterFormComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  exports: [
    CharacterFormComponent
  ]
})
export class FeaturesModule { }
