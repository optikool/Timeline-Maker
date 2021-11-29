import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { PageNotFoundComponent } from './page-not-found.component';

fdescribe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PageNotFoundComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create PageNotFoundComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text Page Not Found', () => {
    const text = el.query(By.css('.page-not-found'));
    expect(text.nativeElement.textContent).toBe('Page Not Found');
  });
});
