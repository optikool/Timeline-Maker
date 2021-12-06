import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterService, myCharacters } from './character.service';
import { routes } from '../app-routing.module';
import { ElectronService } from 'ngx-electron';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ipcRenderer } from 'electron';
import { FakeElectronService } from './fake-electron.service';

// class Channel {
//   constructor(public name: string, public listener: Function) {}
// }

// export class Message {
//   channel: string;
//   params?: any[];
// }

// class FakeElectronService {
  // channelSource = new Subject<Message>();

  // private channels: Channel[] = [];

  // ipcRenderer = {
  //   // on: (name: string, listener: Function) => {
  //   //   this.channels.push(new Channel(name, listener));
  //   // },
  //   // once: (name: string, listener: Function) => {
  //   //   this.channels.push(new Channel(name, listener));
  //   // },
  //   sendSync: jasmine.createSpy().and.stub()
  //   // sendSync: (channel: string, args: string[]) => {
  //   //   return {
  //   //     response: 'okay'
  //   //   }
  //   // }
  // };

  // ipcRenderer() {
  //   return jasmine.createSpy().and.returnValue({sendSync: jasmine.createSpy()})

    // return function sendSync(channel: string, args: string[]) {

    // }
  // }

  // constructor() {
    // this.channelSource.subscribe(msg => {
    //   this.channels.find(channel => channel.name === msg.channel).listener({}, ...msg.params);
    // });
  // }
// }

const fakeElectronService = {
  ipcRenderer: jasmine.createSpy().and.returnValue({sendSync: jasmine.createSpy().and.returnValue('get-characters')})
}

xdescribe('CharacterService', () => {
  let service: CharacterService;
  let routerSpy: Router;
  let electronService: ElectronService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [
        CharacterService,
        { provide: Router, useValue: routerSpy },
        { provide: ElectronService, useValue: FakeElectronService }
      ],
    }).compileComponents()
    .then(() => {
      routerSpy = jasmine.createSpyObj(Router, ['navigate']);
      service = TestBed.inject(CharacterService);
      electronService = TestBed.inject(ElectronService);
    });    
  }));

  it('should be created', () => {
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

  xit('should get characters', () => {
    spyOn(electronService.ipcRenderer, 'sendSync').and.stub();

    service.getCharacters()
      .subscribe(result => {
        console.log('result: ', result);
        expect(result.length).toEqual(5);
        expect(electronService.ipcRenderer.sendSync).toHaveBeenCalled();
      });
  });

  it('should call navigateToPage', () => {
    const nav = ['/character-edit', '2'];
    service.navigateToPage(nav);
    expect(routerSpy.navigate).toHaveBeenCalledWith(nav);
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
