import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
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
    const text = el.query(By.css('.footer'));
    expect(text.nativeElement.textContent).toBe('footer works!');
  });
});
