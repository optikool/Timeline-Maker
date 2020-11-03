import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.component.html',
  styleUrls: ['./character-new.component.scss']
})
export class CharacterNewComponent implements OnInit {
  controlsConfig;
  submitted = false;
  ngOnDestroy$ = new Subject();

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.controlsConfig = {
      id: [''],
      characterName: ['', Validators.required],
      dateOfBirth: [''],
      dateOfDeath: [''],
      fatherName: ['', Validators.required],
      motherName: [''],
      sonName: ['', Validators.required],
      fatherAgeAtBirth: [''],
      fatherContinuedToLive: [''],
      reference: [''],
      description: ['']
    };
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

  onSubmit(registerForm: FormGroup) {
    this.submitted = true;

    // return if invalid
    if (registerForm.invalid) {
      return;
    }

    console.log('CharacterNewComponent onSubmit New registerForm: ', registerForm.value);
    this.helperService.saveCharacter(registerForm.value)
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(data => {
        console.log('CharacterComponent Response: ', data);
        this.submitted = false;
        registerForm.reset();
        this.navigateToPage(['/characters']);
      });
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
