import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterFormComponent } from './forms/character-form/character-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    CharacterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    CharacterFormComponent
  ]
})
export class ComponentsModule { }
