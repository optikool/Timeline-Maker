import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterProfileDialogComponent } from './character-profile-dialog.component';

describe('CharacterProfileComponent', () => {
  let component: CharacterProfileDialogComponent;
  let fixture: ComponentFixture<CharacterProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterProfileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
