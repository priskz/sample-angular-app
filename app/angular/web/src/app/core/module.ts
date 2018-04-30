import { ModuleWithProviders, NgModule, Optional, SkipSelf }  from '@angular/core';
import { CommonModule }                                       from '@angular/common';
import { MeService }                                          from './service/me';
import { NewsService }                                        from './service/news';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [],
  exports:      [],
  providers:    [
    MeService,
    NewsService
  ]
})

export class CoreModule
{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule)
  {
    if(parentModule)
    {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
