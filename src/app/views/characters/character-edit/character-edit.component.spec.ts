import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CharacterFormComponent } from '../../../features/character-form/character-form.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { CharacterService } from 'src/app/core/services/character.service';
import { initialState } from '../store';

import { CharacterEditComponent } from './character-edit.component';

describe('CharacterEditComponent', () => {
  let component: CharacterEditComponent;
  let fixture: ComponentFixture<CharacterEditComponent>;
  let el: DebugElement;
  let mockCharacterService: CharacterService;

  beforeEach(waitForAsync(() => {
    mockCharacterService = jasmine.createSpyObj('mockCharacterService', ['navigateToPage']);

    TestBed.configureTestingModule({
      declarations: [
        CharacterEditComponent,
        MockComponent(CharacterFormComponent),
        MockComponent(FooterComponent)
      ],
      imports: [
        MaterialsModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: CharacterService, useValue: mockCharacterService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    const text = el.query(By.css('.character-edit-header'));
    expect(text.nativeElement.textContent).toBe('Edit Character');
    expect(component).toBeTruthy();
  });
});
