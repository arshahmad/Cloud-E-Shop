import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
} from '@angular/material';

const MODULES = [
  MatSnackBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatCardModule,
  MatDatepickerModule,
  MatIconModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSelectModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule {
}
