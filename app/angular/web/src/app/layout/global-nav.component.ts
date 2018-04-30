import { Component }               from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router }                  from '@angular/router';
import { MeService }               from '../core/service/me';
import { NewsService }             from '../core/service/news';

@Component({
	selector: 'global-nav',
	templateUrl:'./global-nav.component.html',
  styleUrls: ['./global-nav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class GlobalNavComponent
{
  page  = 1;
  pages = [2, 3, 4]

  /**
   * @constructor
   */
	constructor(
    private router: Router,
    public  me:     MeService,
    public  news:   NewsService
  )
	{

	}

  // Sets the current page.
  setPage(page)
  {
    this.page = page;

    this.setPages();

    this.news.load({page: this.page, pageSize: 20});
  }

  // Sets the available page buttons.
  setPages()
  {
    let pages = [];

    let i = 1;

    let total = 3;

    for(i; i <= total; i++)
    {
      pages.push(this.page + i);
    }

    this.pages = pages;
  }

  //
  logout(): void
  {
    this.me.logout();

    this.router.navigate(['']);
  }
}
