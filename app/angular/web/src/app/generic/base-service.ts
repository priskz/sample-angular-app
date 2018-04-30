import { environment }     from './../../environments/environment';

// External Varible Declarations
declare var Notifier: any;

export class BaseService
{
  public errorMessage: any;

  // Construct
  constructor()
  {

  }

  // Send a notification.
  notify(payload, type)
  {
    var messageTitle = null;
    var messageBody = payload.message;

    if(typeof payload.message === 'object')
    {
      var messageTitle = payload.message.title;
      var messageBody = payload.message.body;
    }

    switch(type)
    {
      case 'error':
        Notifier.error(messageBody, messageTitle);
      break;

      case 'success':
        Notifier.success(messageBody, messageTitle);
      break;

      case 'warning':
        Notifier.warning(messageBody, messageTitle);
      break;

      case 'info':
        Notifier.info(messageBody, messageTitle);
      break;
    }
  }

  protected handleError(error)
  {
    // In a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
  }
}
