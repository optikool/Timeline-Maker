import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {By} from '@angular/platform-browser';
import { MaterialsModule } from '../../../core/materials/materials.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;
  let routerMock: any;

  beforeEach(waitForAsync(() => {
    const routerEventRelaySubject = new ReplaySubject<RouterEvent>(1);
    routerMock = {
      events: routerEventRelaySubject.asObservable(),
      navigate:  jasmine.createSpy()
    };


    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      imports: [
        MaterialsModule,
      ],
      providers: [
        MaterialsModule,
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate to page', fakeAsync(() => {
    const path = ['/character-edit', '4'];

    fixture.detectChanges();

    component.navigateToPage(path);
    flushMicrotasks();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it('should show full menu', () => {
    fixture.detectChanges();
    const items = el.queryAll(By.css('.mat-button'));
    expect(items.length).toBe(4);
    expect(items[0].nativeElement.innerText).toBe('Home');
    expect(items[1].nativeElement.innerText).toBe('Timeline');
    expect(items[2].nativeElement.innerText).toBe('Characters');
    expect(items[3].nativeElement.innerText).toBe('Help');
  });
});
