import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public dataSource: Character[];
  private ngOnDestroy$ = new Subject();

  constructor(
    private route: ActivatedRoute, 
    private helperService: HelperService) {
    this.route.data
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((data) => {
        this.dataSource = data.characters;
      });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

  navigateToPage(page): void {
    this.helperService.navigateToPage(page);
  }

  deleteCharacter(id: number): void {
    console.log('Deleting character id: ', id);
    this.helperService.deleteCharacter(id)
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(data => {
        console.log('CharactersComponent Response: ', data);
        this.dataSource = data;
      });
  }
}
