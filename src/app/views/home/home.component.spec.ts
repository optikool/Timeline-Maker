import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialsModule } from 'src/app/materials/materials.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialsModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create HomeComponent', fakeAsync(() => {
    spyOn(component, 'ngOnInit');

    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.homeLogo).toContain('assets/images/family-tree-02.png');
  }));

  it('should have image', fakeAsync(() => {
    fixture.detectChanges();
    const img = el.query(By.css('.mat-card-image'));
    expect(img.nativeElement.src).toContain(component.homeLogo);
  }));
});
