import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Navigation } from 'src/app/interfaces/navigation';

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
    name: 'Settings',
    url: ['/settings'],
    isActive: false
  },
  {
    id: 5,
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
  public url: Observable<string>;
  public navigation: Array<Navigation>;

  constructor(
    private router: Router
  ) {
    this.navigation = NAVI;
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))  
    .subscribe((event: NavigationEnd) => {
      this.navigation =  this.navigation.map(link => {
        return {
          ...link,
          isActive: link.url.includes(event.url)
        }
      });
    });
  }

  navigateToPage(page): void {
    this.router.navigate(page);
  }
}
