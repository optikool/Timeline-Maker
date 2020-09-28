import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timeline-maker';

  constructor(private _electronService: ElectronService) {

  }

  launchWindow() {
    this._electronService.shell.openExternal('http://www.maesworld.com');
  }
}
