import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './views/help/help.component';

import { HomeComponent } from './views/home/home.component';
import { CharacterComponent } from './views/character/character.component';
import { CharactersComponent } from './views/characters/characters.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SettingsComponent } from './views/settings/settings.component';
import { TimeLineComponent } from './views/time-line/time-line.component';

import { CharactersResolverService } from './resolvers/characters-resolver.service';
import { CharacterResolverService } from './resolvers/character-resolver.service';
import { CharacterNewComponent } from './views/character-new/character-new.component';


const routes: Routes = [
  { path: 'characters', 
    component: CharactersComponent, 
    resolve: {
      characters: CharactersResolverService
    }
  },
  {
    path: 'character/new',
    component: CharacterNewComponent
  },
  { path: 'character/:id', 
    component: CharacterComponent,
    resolve: {
      character: CharacterResolverService
    }
  },
  { path: 'time-line', component: TimeLineComponent },
  { path: 'help', component: HelpComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
