import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';
import { MaterialsModule } from './materials/materials.module';
import { ModalsModule } from './modals/modals.module';
import { AnimationsModule } from './animations/animations.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    ModalsModule,
    AnimationsModule
  ],
  exports: [
  ]
})
export class CoreModule { }
