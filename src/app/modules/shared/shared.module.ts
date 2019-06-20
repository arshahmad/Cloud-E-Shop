import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SearchBarComponent} from '@ecm-modules/shared/components/searchbar/searchbar.component';
import {MaterialModule} from '@ecm-modules/material.module';
import {ButtonComponent} from '@ecm-modules/shared/components/button/button.component';
import {LabelInputComponent} from '@ecm-modules/shared/components/label-input/label-input.component';
import {SearchInputComponent} from '@ecm-modules/shared/components/search-input/search-input.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MODULES = [
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
  CommonModule,
  BrowserAnimationsModule,
];

const DIRECTIVES = [];

const COMPONENTS = [
  SearchBarComponent,
  ButtonComponent,
  LabelInputComponent,
  SearchInputComponent,
];

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
    CommonModule
  ],
  exports: [
    ...MODULES,
    ...DIRECTIVES,
    ...COMPONENTS
  ]
})
export class SharedModule {
}
