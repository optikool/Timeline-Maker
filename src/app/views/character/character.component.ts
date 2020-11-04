import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/interfaces/character';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  controlsConfig;
  submitted = false;
  dataSource: Character;
  title: string;
  ngDestroy$ = new Subject();

  constructor( 
    private route: ActivatedRoute, 
    private helperService: HelperService) {
    this.route.data
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((data) => {
        this.dataSource = data.character;
        this.title = data.character.id === 'new' ? 'New Character' : 'Edit Character';
      });
  }

  ngOnInit(): void {
    this.controlsConfig = {
      id: [this.dataSource.id],
      characterName: [this.dataSource.characterName, Validators.required],
      dateOfBirth: [this.dataSource.dateOfBirth],
      dateOfDeath: [this.dataSource.dateOfDeath],
      fatherName: [this.dataSource.fatherName, Validators.required],
      motherName: [this.dataSource.motherName],
      sonName: [this.dataSource.sonName, Validators.required],
      fatherAgeAtBirth: [this.dataSource.fatherAgeAtBirth],
      fatherContinuedToLive: [this.dataSource.fatherContinuedToLive],
      reference: [this.dataSource.reference],
      description: [this.dataSource.description]
    };
  }
  
  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

  onSubmit(registerForm: FormGroup): void {
    this.submitted = true;

    // return if invalid
    if (registerForm.invalid) {
      return;
    }

    this.helperService.updateCharacter(registerForm.value)
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(data => {
        console.log('CharacterComponent Response: ', data);
        this.submitted = false;
        registerForm.reset();
        this.navigateToPage(['/characters']);
      });
  }

  onReset(registerForm: FormGroup): void {
    this.submitted = false;
    registerForm.reset();
    this.navigateToPage(['/characters']);
  }

  navigateToPage(page): void {
    this.helperService.navigateToPage(page);
  }
}
