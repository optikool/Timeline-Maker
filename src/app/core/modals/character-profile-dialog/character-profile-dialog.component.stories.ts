import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { initialState } from '../../../views/characters/store';
import { MaterialsModule } from '../../materials/materials.module';
import { CharacterProfileDialogComponent } from './character-profile-dialog.component';

export default {
  title: 'App/Core/Character Profile Dialog',
  component: CharacterProfileDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [CharacterProfileDialogComponent],
      imports: [BrowserAnimationsModule, MaterialsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] },
        provideMockStore({ initialState })]
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const ProfileDialog = Template.bind({});

