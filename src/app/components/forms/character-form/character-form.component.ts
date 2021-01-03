import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character, CharacterGenderList } from 'src/app/models/character.model';
import { CharacterState } from 'src/app/views/characters/store';
import { selectFatherList, selectMotherList } from 'src/app/views/characters/store/character.selectors';

interface GenderType {
  value: string;
  name: string;
}
@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  registerForm: FormGroup;
  controlsConfig = {};
  children: Character[];
  genderList: GenderType[];
  submitted:boolean;
  createUpdate: string = '';
  fatherList$: Observable<CharacterGenderList[]>;
  motherList$: Observable<CharacterGenderList[]>;

  @Input() public configData: { [key: string]: any; };
  @Input() public childrenData: Character[];
  @Input() public isNew: boolean;
  @Output() public submit = new EventEmitter<FormGroup>();
  @Output() public reset = new EventEmitter<FormGroup>();

  constructor(
    private formBuilder: FormBuilder,
    private readonly store: Store<CharacterState>
  ) {
    this.genderList = [
      {
        value: 'M',
        name: 'Male'
      },
      {
        value: 'F',
        name: 'Female'
      }
    ];
    this.registerForm = this.formBuilder.group({
      id: [''],
      characterName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: [''],
      dateOfDeath: [''],
      fatherId: [''],
      motherId: [''],
      fatherAgeAtBirth: [''],
      fatherContinuedToLive: [''],
      reference: [''],
      description: ['']
    });
    this.controlsConfig = {
      id: null,
      characterName: '',
      gender: 'M',
      dateOfBirth: null,
      dateOfDeath: null,
      fatherId: 0,
      motherId: 0,
      fatherAgeAtBirth: null,
      fatherContinuedToLive: null,
      reference: '',
      description: ''
    };
    this.submitted = false;
    this.fatherList$ = this.store.select(selectFatherList);
    this.motherList$ = this.store.select(selectMotherList);
  }

  ngOnInit(): void {
    this.createUpdate = this.isNew ? 'Create' : 'Update';
    this.children = this.childrenData;
    this.controlsConfig = {
      id: this.configData.id,
      characterName: this.configData.characterName,
      gender: this.configData.gender,
      dateOfBirth: this.configData.dateOfBirth,
      dateOfDeath: this.configData.dateOfDeath,
      fatherId: this.configData.fatherId,
      motherId: this.configData.motherId,
      fatherAgeAtBirth: this.configData.fatherAgeAtBirth,
      fatherContinuedToLive: this.configData.fatherContinuedToLive,
      reference: this.configData.reference,
      description: this.configData.description
    };
    this.registerForm.reset(this.controlsConfig);
    console.log('configData: ', this.configData);
  }

  get f() { return this.registerForm && this.registerForm.controls; }

  onSubmit(): void {
    console.log('CharacterFormComponent onSubmit was called...');
    if (this.registerForm.invalid) {
      return;
    }

    this.submit.emit(this.registerForm);
  }

  onReset(): void {
    console.log('CharacterFormComponent onReset was called...');
    this.reset.emit(this.registerForm);
  }
}
