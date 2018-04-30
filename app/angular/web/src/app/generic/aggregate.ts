export class Aggregate
{
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

  // Dump this model's data into the console.
  dump()
  {
    console.log(this);
  }
}
