import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, startWith} from 'rxjs/operators';

@Component({
  selector: 'ecm-search-input',
  template: `
    <mat-form-field [ngClass]="panelClass" floatLabel="never" class="search-field">
      <input matInput placeholder="Search" [formControl]="control">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
  `,
  styles: [`
    ::ng-deep .search-field .mat-form-field-underline {
      display: none;
    }

    .mat-icon {
      font-size: 18px;
      width: fit-content !important;
    }

    .mat-form-field {
      max-height: 50px;
    }
  `]
})
export class SearchInputComponent implements OnInit {
  control = new FormControl(null);
  @Input() panelClass: string;
  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    this.control.valueChanges.pipe(debounceTime(250), distinctUntilChanged(), startWith('')).subscribe(
      (value) => this.search.next(value.trim())
    );
  }
}
