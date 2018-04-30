import { NgModule }           from '@angular/core';
import { GeneralModule }      from '../shared/general.module';
import { GlobalNavComponent } from './global-nav.component';

@NgModule({
  imports:      [
    GeneralModule
  ],
  declarations: [
    GlobalNavComponent
  ],
  exports: [
    GlobalNavComponent
  ],
  providers:    []
})

export class LayoutModule { }
