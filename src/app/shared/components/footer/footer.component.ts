import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  createUpdate: string = '';

  @Input() public isNew: boolean;
  @Input() public isDisabled: boolean;
  @Output() public submit = new EventEmitter<string>();
  @Output() public reset = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('isNew: ', this.isNew);
    console.log('isDisabled: ', this.isDisabled);
    this.createUpdate = this.isNew ? 'Create' : 'Update';
  }

  onReset(): void {
    this.reset.emit('reset');
  }

  onSubmit(): void {
    this.submit.emit('submit');
  }
}
