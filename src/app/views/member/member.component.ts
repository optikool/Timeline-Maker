import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      memberName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfDeath: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      sonName: ['', Validators.required],
      daughterName: ['', Validators.required],
      fatherAgeAtBirth: ['', Validators.required],
      fatherLivedTill: ['', Validators.required],
      reference: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // return if invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('registerForm: ', this.registerForm.value);
}

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
