import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { CharacterFormComponent } from './character-form.component';
import { MaterialsModule } from '../../core/materials/materials.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/views/characters/store';
import { Character } from 'src/app/core/models/character.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let configData = {
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

let childrenData: Character[] = [];

let isNew = true;

export default {
  title: 'App/Features/Character Form',
  component: CharacterFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [CharacterFormComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MaterialsModule],
      providers: [FormBuilder, provideMockStore({ initialState })],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const NewView = Template.bind({});
NewView.args = {
  configData,
  childrenData,
  isNew
};

configData = {
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

childrenData = [];

isNew = false;

export const EditView = Template.bind({});
EditView.args = {
  configData,
  childrenData,
  isNew
};
