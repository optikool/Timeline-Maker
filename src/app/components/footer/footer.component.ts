import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  createUpdate = 'Create';

  constructor() { }

  ngOnInit(): void {
  }

  isDisabled(): boolean {
    return true;
  }

  onReset(): void {

  }
}
