import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  registerForm: FormGroup;
  controlsConfig: FormGroup;
  submitted:boolean = false;

  @Input() public config;
  @Output() public submit = new EventEmitter<FormGroup>();
  @Output() public reset = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.config);
    this.registerForm = this.formBuilder.group(this.config);
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.submit.emit(this.registerForm);
  }

  onReset(): void {
    this.submitted = false;
    this.reset.emit(this.registerForm);
  }
}