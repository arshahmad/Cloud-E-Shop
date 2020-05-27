import { NgModule } from '@angular/core';
import {HomeComponent} from '@ecm-modules/core/components/home/home.component';
import {SharedModule} from '@ecm-modules/shared/shared.module';
import {PageComponent} from '@ecm-modules/core/components/page/page.component';
import {FeaturesComponent} from '@ecm-modules/core/components/features/features.component';
import {ButtonService} from '@ecm-app/button.service';
import {SocialMComponent} from '@ecm-modules/core/components/social-m/social-m.component';
import {FooterComponent} from '@ecm-modules/core/components/footer/footer.component';
import {LogInComponent} from '@ecm-modules/core/components/log-in/log-in.component';
import {ServerService} from '@ecm-modules/core/server.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ButtonService,
    ServerService
  ],
  declarations: [
    HomeComponent,
    PageComponent,
    FeaturesComponent,
    SocialMComponent,
    FooterComponent,
    LogInComponent,
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: []
})
export class CoreModule {
}
