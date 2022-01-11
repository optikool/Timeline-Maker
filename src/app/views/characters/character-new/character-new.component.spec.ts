import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialsModule } from '../../../core/materials/materials.module';
import { CharacterService } from 'src/app/core/services/character.service';
import { initialState } from '../store';

import { CharacterNewComponent } from './character-new.component';
import { CharacterFormComponent } from '../../../features/character-form/character-form.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CharacterNewComponent', () => {
  let component: CharacterNewComponent;
  let fixture: ComponentFixture<CharacterNewComponent>;
  let mockCharacterService: CharacterService;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    mockCharacterService = jasmine.createSpyObj('mockCharacterService', ['navigateToPage']);

    TestBed.configureTestingModule({
      declarations: [
        CharacterNewComponent,
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
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CharacterNewComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should create CharacterNewComponent', () => {
    const text = el.query(By.css('.character-new-header'));
    expect(text.nativeElement.textContent).toBe('New Character');
    expect(component).toBeTruthy();
  });
});
