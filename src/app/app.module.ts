import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { InterfacesModule } from './interfaces/interfaces.module';
import { PipesModule } from './pipes/pipes.module';
import { ResolversModule } from './resolvers/resolvers.module';
import { ViewsModule } from './views/views.module';
import { MaterialsModule } from './helpers/materials.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    MaterialsModule,
    ComponentsModule,
    DirectivesModule,
    InterfacesModule,
    PipesModule,
    ResolversModule,
    ViewsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    ComponentsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
