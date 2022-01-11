import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCharacterState from './store';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterNewComponent } from './character-new/character-new.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './store/character.effects';
import { MaterialsModule } from '../../materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesModule } from 'src/app/features/features.module';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterNewComponent,
    CharacterEditComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature(
      fromCharacterState.characterStateFeatureKey,
      fromCharacterState.reducers,
      { metaReducers: fromCharacterState.metaReducers }
    ),
    EffectsModule.forFeature([CharacterEffects]),
    MaterialsModule,
    ReactiveFormsModule,
    SharedModule,
    FeaturesModule
  ]
})
export class CharactersModule { }
