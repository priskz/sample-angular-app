import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule }        from '@angular/router';
import { MaterialModule }      from './material.module';
import { FlexLayoutModule }    from '@angular/flex-layout';
import { MillionizePipe }      from './pipe/millionize';

@NgModule({
  imports:      [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    MillionizePipe
  ],
  exports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    MillionizePipe
  ],
  providers:[]
})

export class GeneralModule {}
