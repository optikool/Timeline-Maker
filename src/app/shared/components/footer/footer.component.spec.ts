import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialsModule } from 'src/app/materials/materials.module';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        MaterialsModule
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FooterComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create FooterComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain text footer works!', () => {
    pending();
    fixture.detectChanges();
    const text = el.query(By.css('.footer'));
    expect(text.nativeElement.textContent).toBe('footer works!');
  });
});
