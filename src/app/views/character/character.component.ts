import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private helperService: HelperService) {
    this.route.data.subscribe((data) => {
      console.log('data: ', data);
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

  onSubmit(registerForm: FormGroup) {
    this.submitted = true;

    // return if invalid
    if (registerForm.invalid) {
      return;
    }

    console.log('onSubmit registerForm: ', registerForm.value);
  }

  onReset(registerForm: FormGroup) {
    console.log('onReset registerForm: ', registerForm.value);
    this.submitted = false;
    registerForm.reset();
    this.navigateToPage(['/characters']);
  }

  navigateToPage(page) {
    this.helperService.navigateToPage(page);
  }
}
