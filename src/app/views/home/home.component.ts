import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public homeLogo: string = 'assets/images/family-tree-02.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
