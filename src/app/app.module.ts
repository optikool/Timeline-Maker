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

import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    ComponentsModule,
    DirectivesModule,
    InterfacesModule,
    PipesModule,
    ResolversModule,
    ViewsModule
  ],
  exports: [
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
