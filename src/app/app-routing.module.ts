import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './views/home/home.component';
import { CharacterEditComponent } from './views/characters/character-edit/character-edit.component';
import { CharacterListComponent } from './views/characters/character-list/character-list.component';
import { CharacterNewComponent } from './views/characters/character-new/character-new.component';
import { HelpComponent } from './views/help/help.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

// Resolvers
import { CharacterResolver } from './core/resolvers/character.resolver';
import { CharactersResolver } from './core/resolvers/characters.resolver';
import { HomeResolver } from './core/resolvers/home.resolver';
import { TimelineResolver } from './core/resolvers/timeline.resolver';

export const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListComponent,
    resolve: {
      characters: CharactersResolver
    }
  },
  {
    path: 'character-new',
    component: CharacterNewComponent,
    resolve: {
      character: CharacterResolver
    }
  },
  {
    path: 'character-edit/:id',
    component: CharacterEditComponent,
    resolve: {
      character: CharacterResolver
    }
  },
  {
    path: 'time-line',
    component: TimelineComponent,
    resolve: {
      characters: TimelineResolver
    }
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: '',
    component: HomeComponent,
    resolve: {
      home: HomeResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
