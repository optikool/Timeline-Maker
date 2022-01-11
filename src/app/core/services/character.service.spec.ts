import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterService, myCharacters } from './character.service';
import { routes } from '../../app-routing.module';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';

describe('CharacterService', () => {
  let service: CharacterService;
  let routerSpy: Router = jasmine.createSpyObj(Router, ['navigate']);
  const electronService = {
    ipcRenderer: {
      sendSync: () => myCharacters
    }
  } as unknown as ElectronService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [
        CharacterService,
        { provide: Router, useValue: routerSpy },
        { provide: ElectronService, useValue: electronService }
      ],
    }).compileComponents()
    .then(() => {
      service = TestBed.inject(CharacterService);
    });
  }));

  it('should be created', () => {
    pending();
    expect(service).toBeTruthy();
  });

  it('should get character', () => {
    service.getCharacter({ id: 3, type: 'string'}, myCharacters)
      .subscribe(result => {
        expect(result.characterName).toBe('Seth');
        expect(result.gender).toBe('M');
        expect(result.id).toBe(3);
      });
  });

  it('should get characters', () => {
    service.getCharacters()
      .subscribe(result => {
        expect(result.length).toEqual(8);
        expect(electronService.ipcRenderer.sendSync).toHaveBeenCalled();
        expect(electronService.ipcRenderer).toHaveBeenCalledTimes(1);
      });
  });

  it('should call navigateToPage', () => {
    const nav = ['/character-edit', '2'];
    service.navigateToPage(nav);
    expect(routerSpy.navigate).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(nav);
    expect(routerSpy.navigate).toHaveBeenCalledTimes(1);
  });

  it('should createCharacter', () => {
    pending();
  });

  it('should updateCharacter', () => {
    pending();
  });

  it('should deleteCharacter', () => {
    pending();
  });

  it('should getGenderList', () => {
    pending();
  });
});
