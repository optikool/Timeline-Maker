import { ComponentFixture, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { initialState } from 'src/app/views/characters/store';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CharacterProfileDialogComponent } from './character-profile-dialog.component';
import { of } from 'rxjs';

describe('CharacterProfileComponent', () => {
  let component: CharacterProfileDialogComponent;
  let fixture: ComponentFixture<CharacterProfileDialogComponent>;
  let matDialogMock;

  beforeEach(waitForAsync(() => {
    matDialogMock = {open: () => ({afterClosed: () => of(true)})};

    TestBed.configureTestingModule({
      declarations: [
        CharacterProfileDialogComponent
      ],
      imports: [
        MaterialsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: matDialogMock },
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CharacterProfileDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    pending();
    expect(component).toBeTruthy();
    //flush();
  });
});
