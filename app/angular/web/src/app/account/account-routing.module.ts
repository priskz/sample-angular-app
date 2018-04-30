import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent }       from './details.component';

const accountRoutes: Routes = [
  {
    path: 'account',
    children: [
      { path: '', component: DetailsComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(accountRoutes) ],
  exports: [ RouterModule ]
})

export class AccountRoutingModule {}
