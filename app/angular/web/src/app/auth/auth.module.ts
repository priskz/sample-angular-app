import { NgModule }          from '@angular/core';
import { GeneralModule }     from '../shared/general.module';
import { LoginComponent }    from './login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports:      [
    GeneralModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
  providers: []
})

export class AuthModule { }
