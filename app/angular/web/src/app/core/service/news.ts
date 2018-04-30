import { BaseService }                         from '../../generic/base-service';
import { Injectable }                          from '@angular/core';
import { BehaviorSubject, Observable }         from 'rxjs';
import { map }                                 from "rxjs/operators";
import { List }                                from 'immutable';
import { News as Aggregate }                   from '../../domain/news';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment }                         from './../../../environments/environment';

@Injectable()
export class NewsService extends BaseService
{
  /**
   * This service's aggregate identifier.
   */
  protected name = 'news';

  /**
   * The base endpoint for this sevice to make requests.
   */
  protected endpoint = 'https://newsapi.org/v2/everything?sources=nfl-news';

  /**
   * The Headers used by this service.
   */
  protected headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + environment.news_api_key
  });

  /**
   * Observable Sources
   */
  private         _data: BehaviorSubject<List<Aggregate>> = new BehaviorSubject(null);
  public readonly data$: Observable<List<Aggregate>>      = this._data.asObservable();

  private         _status: BehaviorSubject<string>        = new BehaviorSubject('uninintialized');
  public readonly status$: Observable<string>             = this._status.asObservable();

  /**
   * @constructor
   */
  constructor(private _http: HttpClient)
  {
    super();
  }

  /**
   * Load this service's data.
   * @returns void
   */
  load(parameters): void
  {
    // Update status state.
    this._status.next('loading');

    // Make an http request to retrieve data.
    this._http.get<Payload>(this.endpoint, {params: parameters, headers: this.headers})
        .subscribe(
            payload => {

              if(payload.status == 'ok')
              {
                let items = null;

                // Iterate data and convert to aggregate objects.
                items = (<Object[]>payload.articles).map((data: any) => new Aggregate(data));

                // Update data.
                this._data.next(List(items));
              }

              // Update status.
              this._status.next('ready');
      },
      err => console.log('Could not load ' + this.name + '.')
    );
  }
}

/**
 * The expected interface of API's request payload.
 */
interface Payload
{
  articles: Array<{}>
  status: string;
  totalResults: any;
}
