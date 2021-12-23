import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CharacterFormComponent } from './character-form.component';
import { Router, RouterEvent } from '@angular/router';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/views/characters/store';
import { Character } from 'src/app/models/character.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Character Form', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CharacterFormComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MaterialsModule],
      providers: [FormBuilder, provideMockStore({ initialState })],
    })
  )
  .add('Character Form New View', () => {
    const configData = {
        id: null,
        characterName: '',
        gender: 'M',
        dateOfBirth: null,
        dateOfDeath: null,
        fatherId: null,
        motherId: null,
        fatherAgeAtBirth: null,
        fatherContinuedToLive: null,
        reference: '',
        description: '',
    };

    const childrenData: Character[] = [];

    const isNew = true;

    return {
      template: 
      `<app-character-form
            [configData]='configData'
            [childrenData]='childrenData'
            [isNew]='isNew'></app-character-form>`,
    };
  })
  .add('Character Form Edit View', () => {
    const configData = {
        id: 2,
        characterName: 'Eve',
        gender: 'F',
        dateOfBirth: '100',
        dateOfDeath: '3096',
        fatherId: 0,
        motherId: 0,
        fatherAgeAtBirth: 130,
        fatherContinuedToLive: 800,
        reference: 'Gen 5:3-5',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.',
    };
      
      const childrenData: Character[] = [];
      
      const isNew = false;

    return {
      template: `
        <app-character-form 
            [configData]='configData'
            [childrenData]='childrenData'
            [isNew]='isNew'></app-character-form>`,
      props: { configData, childrenData, isNew },
    };
  });
