import { Component }               from '@angular/core';
import { OnInit }                  from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MeService }               from './core/service/me';
import { MatSnackBar }             from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit
{
  /**
   * @constructor
   */
  constructor(
    public  snackBar: MatSnackBar,
    private me:       MeService
  )
  {

  }

  //
  ngOnInit()
  {
    this.me.load();
  }
}
