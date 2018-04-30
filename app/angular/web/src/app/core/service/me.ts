import { BaseService }                 from '../../generic/base-service';
import { Payload }                     from '../../generic/payload-interface';
import { Injectable }                  from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map }                         from "rxjs/operators";
import { List }                        from 'immutable';
import { Me as Aggregate }             from '../../domain/me';
import { HttpClient }                  from '@angular/common/http';

@Injectable()
export class MeService extends BaseService
{
  /**
   * This service's aggregate identifier.
   */
  protected name = 'me';

  /**
   * The base endpoint for this sevice to make requests.
   */
  protected endpoint = '/me';

  /**
   * Observable Sources
   */
  private         _data: BehaviorSubject<Aggregate> = new BehaviorSubject(new Aggregate({}));
  public readonly data$: Observable<Aggregate>      = this._data.asObservable();

  private         _status: BehaviorSubject<string>  = new BehaviorSubject('uninintialized');
  public readonly status$: Observable<string>       = this._status.asObservable();

  /**
   * @constructor
   */
  constructor(private _http: HttpClient)
  {
    super();
  }

  //
  get data()
  {
    return this._data.getValue();
  }

  // Mock a logout. Commented code is sample of actual result.
  logout(): void
  {
    // this._http.post<Payload>(this.endpoint + '/logout', null)
    //     .subscribe(
    //         payload => {

    //           if(payload.status == 'logged_out')
    //           {

   this._data.next(new Aggregate({}));

    //           }
    //   },
    //   err => console.log('Could not logout ' + this.name + '.')
    // );
  }

  // Mock a login. Commented code is sample of actual result.
  login(data)
  {
    // let request = this._http.post<Payload>(this.endpoint + '/login', data);

    // request.subscribe(
    //   payload => {

    //     if(payload.status == 'logged_in')
    //     {

    this._data.next(new Aggregate({
      id:         '1',
      username:   'mock_user',
      first_name: 'Mock',
      last_name:  'User',
      email:      null
    }));

    //     }
    //   },
    //   err => console.log('Could not login ' + this.name + '.')
    // );

    // return request;
  }

  // Mock a load. Commented code is sample of an actual solution.
  /**
   * Load this service's data.
   * @returns void
   */
  load(): void
  {
     // Update status state.
    this._status.next('loading');

    // // Make an http request to retrieve data.
    // this._http.get<Payload>(this.endpoint)
    //     .subscribe(
    //         payload => {

    //           if(payload.status == 'found')
    //           {
    //             // Update data.
    //             this._data.next(new Aggregate(payload.data));
    //           }

    // Update status.
    this._status.next('ready');

    //   },
    //   err => console.log('Could not load ' + this.name + 's.')
    // );
  }

  // Mock updating of a user. Commented code is sample of an actual solution.
  update(data)
  {
    alert('Mocked calling me service\'s update method!');

    // data['id'] = this.data.id;

    // // @todo: fix cors to accept PUT
    // let request = this._http.post<Payload>(this.endpoint, data);

    // request.subscribe(
    //   payload => {

    //     if(payload.status == 'updated')
    //     {
    //       this._data.next(new Aggregate(payload.data));
    //     }

    //   },
    //   err => console.log('Could not login ' + this.name + '.')
    // );

    // return request;
  }
}
