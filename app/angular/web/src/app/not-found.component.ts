import { Component } from '@angular/core';
import { Location }  from '@angular/common';

@Component({
styles : [`
  .bounds {
    padding-top: 20px;
  }
`],
template: `
  <div class="bounds">
    <div fxLayout="row" fxLayoutAlign="center center">
      <h2>Page Not Found</h2>
    </div>
  </div>
`
})

export class NotFoundComponent
{
  constructor(private location: Location)
  {

  }

  goBack(): void
  {
    this.location.back();
  }
}
