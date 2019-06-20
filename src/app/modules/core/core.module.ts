import { NgModule } from '@angular/core';
import {HomeComponent} from '@ecm-modules/core/components/home/home.component';
import {SharedModule} from '@ecm-modules/shared/shared.module';
import {PageComponent} from '@ecm-modules/core/components/page/page.component';
import {FeaturesComponent} from '@ecm-modules/core/components/features/features.component';
import {ButtonService} from '@ecm-app/button.service';
import {SocialMComponent} from '@ecm-modules/core/components/social-m/social-m.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    ButtonService,
  ],
  declarations: [
    HomeComponent,
    PageComponent,
    FeaturesComponent,
    SocialMComponent,
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: []
})
export class CoreModule {
}
