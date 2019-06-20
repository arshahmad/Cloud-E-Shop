import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@ecm-modules/core/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
