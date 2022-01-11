import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navigation } from 'src/app/models/navigation.model.';

const NAVI: Array<Navigation> = [
  {
    id: 1,
    name: 'Home',
    url: ['/'],
    isActive: false
  },
  {
    id: 2,
    name: 'Timeline',
    url: ['/time-line'],
    isActive: false
  },
  {
    id: 3,
    name: 'Characters',
    url: ['/characters'],
    isActive: false
  },
  {
    id: 4,
    name: 'Help',
    url: ['/help'],
    isActive: false
  }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navigation: Array<Navigation>;

  constructor(
    private router: Router
  ) {
    this.navigation = NAVI;
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))  
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navigation = this.navigation.map(link => {
          return {
            ...link,
            isActive: link.url.includes(event.url)
          }
        });
      }
    });
  }

  navigateToPage(page: string[]): void {
    this.router.navigate(page);
  }
}
