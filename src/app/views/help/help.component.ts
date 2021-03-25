import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  public underConstruction: string = 'assets/images/under_construction.png';

  constructor() { }

  ngOnInit(): void {
  }

}
