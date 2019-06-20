import {Component, Input} from '@angular/core';
@Component({
  selector: 'ecm-button',
  template: `
    <div class="button" [matTooltip]="label">
      <span *ngIf="label">{{label}}</span>
      <button *ngIf="icon" class="icon-button" [type]="isFormButton ? 'submit' : 'button'">
        <mat-icon>{{icon}}</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: string;
  @Input() label: string;
  @Input() isFormButton = false;
}
