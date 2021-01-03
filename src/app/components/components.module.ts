import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterFormComponent } from './forms/character-form/character-form.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CharacterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CharacterFormComponent
  ]
})
export class ComponentsModule { }
