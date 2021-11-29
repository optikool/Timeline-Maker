import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
      fixture.detectChanges();
    });
  }));

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have image', () => {
    const img = el.query(By.css('.mat-card-image'));
    expect(el.nativeElement.src).toBe(component.homeLogo);
  });
});
