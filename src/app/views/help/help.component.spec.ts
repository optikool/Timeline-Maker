import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialsModule } from 'src/app/materials/materials.module';

import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialsModule
      ],
      declarations: [ HelpComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HelpComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create HelpComponent', fakeAsync(() => {
    spyOn(component, 'ngOnInit');

    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.underConstruction).toBe('assets/images/under_construction.png');
  }));
});
