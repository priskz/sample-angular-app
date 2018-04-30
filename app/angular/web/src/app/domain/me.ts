import { Record } from 'immutable';

export const MeRecord = Record(
{
  id:         null,
  username:   null,
  first_name: null,
  last_name:  null,
  email:      null
});

export class Me extends MeRecord
{
  id:         number
  username:   string
  first_name: string
  last_name:  string
  email:      string

  /**
   * @constructor
   */
  constructor(properties)
  {
    super(properties);
  }

  //
  get guest():boolean
  {
    return (this.username === null);
  }
}
