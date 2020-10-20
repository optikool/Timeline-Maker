import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public dataSource: Character[];

  constructor(
    private route: ActivatedRoute, 
    private helperService: HelperService) {
    this.route.data.subscribe((data) => {
      this.dataSource = data.characters;
    });
  }

  ngOnInit(): void {
    
  }

  navigateToPage(page) {
    this.helperService.navigateToPage(page);
  }

  deleteCharacter(id: number) {
    console.log('Deleting character id: ', id);
  }
}
