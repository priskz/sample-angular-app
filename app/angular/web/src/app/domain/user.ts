import {List, Record} from 'immutable';

export const UserRecord = Record(
{
	id:         null,
	username:   'Guest',
	email:      '',
	first_name: '',
	last_name:  '',
	created_at: null,
	updated_at: null,
	deleted_at: null,
});

export class User extends UserRecord
{
	id:         number;
	username:   string;
	email:      string;
	first_name: string;
	last_name:  string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;

  constructor(data)
  {
    super(data);
  }

  isGuest()
  {
    let value = true;

    if(this.username != 'Guest')
    {
      value = false;
    }

    return value;
  }

	getUsername()
	{
		return this.username;
	}

  parseMysqlTimestamp(mysqlTimeStamp)
  {
    if (mysqlTimeStamp === null || typeof mysqlTimeStamp !== 'string')
    {
      return null;
    }

    // Split timestamp into [ Y, M, D, h, m, s ]
    var t = mysqlTimeStamp.split(/[- :]/);

    // Apply each element to the Date function
    var d = new Date(parseInt(t[0]), parseInt(t[1]) - 1, parseInt(t[2]), parseInt(t[3]), parseInt(t[4]), parseInt(t[5]));

    // Converet to client's machine time.
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());

    return d;
  }
}
