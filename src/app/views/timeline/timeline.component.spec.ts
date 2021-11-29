import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TimelineComponent } from './timeline.component';
import { selectCharacterTree } from '../characters/store/character.selectors';
import { CharacterState } from '../characters/store';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { Subject } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import * as fromActions from '../characters/store/character.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;
  let store: MockStore;
  let mockCharacterTree;

  const initialState: CharacterState = {
    characters: [],
    character: {
      id: 0,
      characterName: '',
      gender: '',
      dateOfBirth: '',
      dateOfDeath:'',
      fatherId: 0,
      motherId: 0,
      father: {
          id: 0,
          name: '',
          gender: 'M'
      },
      mother: {
          id: 0,
          name: '',
          gender: 'F'
      },
      children: [],
      fatherAgeAtBirth: null,
      fatherContinuedToLive: null,
      reference: '',
      description: ''
    },
    mothers: [],
    fathers: [],
    characterTree: [],
    error: undefined
  };

  const treeList = [
    {
      id: 1,
      characterName: 'Adam',
      gender: 'M',
      dateOfBirth: '50',
      dateOfDeath: '3096',
      fatherId: 0,
      motherId: 0,
      children: [
        {
          id: 3,
          characterName: 'Seth',
          gender: 'M',
          dateOfBirth: '2896',
          dateOfDeath: '2984',
          fatherId: 1,
          motherId: 2,
          children: [],
          fatherAgeAtBirth: 105,
          fatherContinuedToLive: 807,
          reference: 'Gen 5:6-8',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
        }
      ],
      fatherAgeAtBirth: 130,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:3-5',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.'
    },
    {
      id: 2,
      characterName: 'Eve',
      gender: 'F',
      dateOfBirth: '100',
      dateOfDeath: '3096',
      fatherId: 0,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 130,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:3-5',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.'
    }
  ]

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        MatDialogModule,
        MaterialsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        provideMockStore({ initialState }),
     ],
      declarations: [ TimelineComponent ]
    })
    .compileComponents()
    .then(() => {
      
      fixture = TestBed.createComponent(TimelineComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    store = TestBed.inject(MockStore);
    mockCharacterTree = store.overrideSelector(selectCharacterTree, treeList);
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should unsubscribe when destoryed', () => {
    spyOn(component['ngOnDestroy$'], 'complete');
    fixture.detectChanges();
    component.ngOnDestroy();

    expect(component['ngOnDestroy$'].complete).toHaveBeenCalled();
  });

  it('should open dialog box', () => {
    spyOn(store, 'dispatch');
    fixture.detectChanges();
    component.openDialog(1);

    expect(store.dispatch).toHaveBeenCalled();
  });
});
