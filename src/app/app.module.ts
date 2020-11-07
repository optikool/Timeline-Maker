import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResolversModule } from './resolvers/resolvers.module';
import { ViewsModule } from './views/views.module';
import { MaterialsModule } from './helpers/materials.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


import { HelperService } from './services/helper.service';
import { CharacterEffect } from './store/character/character.effects';
import { characterReducers } from './store/character/character.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxElectronModule,
    MaterialsModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    ResolversModule,
    ViewsModule,
    BrowserAnimationsModule,
    NgbModule,
    StoreModule.forRoot({ characters: characterReducers }),
    EffectsModule.forRoot([CharacterEffect])
  ],
  exports: [
    ComponentsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    HelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
