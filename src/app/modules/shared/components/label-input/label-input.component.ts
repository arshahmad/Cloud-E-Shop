import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ecm-label-input',
  template: `
    <div class="input-container">
      <span *ngIf="label">{{label}}</span>
      <mat-form-field>
        <input matInput [formControl]="control" [placeholder]="placeholder" [type]="type">
      </mat-form-field>
    </div>
  `,
  styleUrls: [`./label-input.component.scss`]
})
export class LabelInputComponent {
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() type = 'text';
}
