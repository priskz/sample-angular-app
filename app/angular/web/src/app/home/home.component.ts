import { Component }   from '@angular/core';
import { MeService }   from '../core/service/me';
import { NewsService } from '../core/service/news';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent
{
  /**
   * @constructor
   */
  constructor(
    public me:   MeService,
    public news: NewsService
  )
  {

  }

  /**
   * Perform complex initializations shortly after construction and
   * set up the component after Angular sets the input properties.
   * @returns void
   */
  ngOnInit()
  {
    this.news.load({page: 1, pageSize: 20});
  }
}
