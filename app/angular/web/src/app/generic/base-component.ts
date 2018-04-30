// External Varible Declarations
declare var Notifier: any;

export class BaseComponent
{
	// Construct
	constructor()
	{

	}

  // Handle the response of a request that initiated by this component.
  handleResponse(response)
  {
    // Convert the response to json.
    let payload = response.json();

    switch(payload.status)
    {
      case 'invalid':
        this.notify(payload, 'error');
      break;

      default:
      break;
    }
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
}
