import { NgModule }      from '@angular/core';
import { GeneralModule } from '../shared/general.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports:      [
    GeneralModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
  providers: []
})

export class HomeModule { }
