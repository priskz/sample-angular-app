import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';
import { NotFoundComponent }       from './not-found.component';
import { AppRoutingModule }        from './app-routing.module';
import { CoreModule }              from './core/module';
import { GeneralModule }           from './shared/general.module';
import { AccountModule }           from './account/account.module';
import { AuthModule }              from './auth/auth.module';
import { HomeModule }              from './home/home.module';
import { LayoutModule }            from './layout/layout.module';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    GeneralModule,
    AuthModule,
    AccountModule,
    LayoutModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
