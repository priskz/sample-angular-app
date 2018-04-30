import { NgModule }             from '@angular/core';
import { GeneralModule }        from '../shared/general.module';
import { DetailsComponent }     from './details.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports:      [
    GeneralModule,
    AccountRoutingModule
  ],
  declarations: [
    DetailsComponent
  ],
  exports: [DetailsComponent],
  providers: []
})

export class AccountModule { }
