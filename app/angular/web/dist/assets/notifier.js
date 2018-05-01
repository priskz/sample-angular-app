(function (window)
{
  // External API && Default Config
  window.Notifier =
  {
    provides: 'notifier',
    notify: notify,
    success: function (data, type) { notify(data, 'success'); },
    error: function (data, type)   { notify(data, 'error'); },
    warning: function (data, type) { notify(data, 'warning'); },
    info: function (data, type)    { notify(data, 'info'); },
    config: {
      library: 'alert'
    },
    library: {
      'default': {
        notify: function (data)  { console.info(data); },
        success: function (data) { console.log(data); },
        error: function (data)   { console.log(data); },
        warning: function (data) { console.log(data); },
        info: function (data)    { console.info(data); }
      },
      alert: {
        notify: function (data)  { alert(data); },
        success: function (data) { alert(data); },
        error: function (data)   { alert(data); },
        warning: function (data) { alert(data); },
        info: function (data)    { alert(data); }
      },
      toastr: {
        init: function ()
        {
          if(typeof $ !== 'undefined')
          {
            toastr.options = this.config.options;

            return true;
          }
          else
          {
            return false;
          }
        },
        parse: function (data)
        {
          notification = {message: null, title: null, options: {}};

          switch (typeof data)
          {
            case 'string':
              notification.message = data;
            break;

            case 'object':
              if(typeof data.result.message !== 'undefined')
              {
                notification.message = data.result.message;
              }
              else if(typeof data.result.responseJSON.message !== 'undefined')
              {
                notification.message = data.result.responseJSON.message;
              }
            break;

            default:
              notification.message = 'Unable to parse response data.';
          }

          return notification;
        },
        notify: function (data, type)
        {
          data = this.parse(data);

          if(Array.isArray(data.message))
          {
            for (var i = 0; i < data.message.length; i++)
            {
              toastr[type](data.message[i], data.title, data.options);
            }
          }
          else
          {
            toastr[type](data.message, data.title, data.options);
          }
        },
        success: function (data)
        {
          data = this.parse(data);
          toastr.success(data.message, data.title, data.options);
        },
        error: function (data)
        {
          data = this.parse(data);
          toastr.error(data.message, data.title, data.options);
        },
        warning: function (data)
        {
          data = this.parse(data);
          toastr.warning(data.message, data.title, data.options);
        },
        info: function (data)
        {
          data = this.parse(data);
          toastr.info(data.message, data.title, data.options);
        },
        config: {
          options: {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right',
            timeOut: 6000,
            preventDuplicates: true
          }
        }
      }
    }
  };

  // Set self reference.
  var self = this.Notifier;

  // Initialize
  init();

  function init(config)
  {
    // Override Utitily Config
    if (typeof config !== 'undefined')
    {
      // @todo: Iterate config object and replace all provided values.
      self.config = config;
    }

    if (self.config.library !== 'default' && typeof(window[self.config.library]) === 'undefined')
    {
      // Throw an error if the configured library is not available.
      console.info(self.config.library + ' is not available.');

      // Set the default library as a fall back.
      self.config.library = 'default';
    }
    else
    {
      // Check if the configured library has an init function.
      if (typeof self.library[self.config.library].init === 'function')
      {
        if( ! self.library[self.config.library].init())
        {
          // Throw an error if the configured library is not initialized.
          console.info(self.config.library + ' was not properly initialized.');

          // Set the default library as a fall back.
          self.config.library = 'default';
        }
      }
    }
  }

  // Display/Print Notification Message
  function notify(data, type)
  {
    // Set default argument values, values.
    type = (typeof type !== "undefined") ? type : 'info';
    data = (typeof data !== "undefined") ? data : '';

    // Use the configured library to deliver the notification.
    self.library[self.config.library].notify(data, type);
  }

  // @todo: Currently not utilized.
  // @todo: Add to external API when implemented.
  // Load an external service(s).
  function load(service)
  {
    if (Array.isArray(service))
    {
      for (var i = 0; i < service.length; i++)
      {
        self.service[service[i].provides] = service[i];
      }
    }
    else
    {
      self.service[service.provides] = service;
    }
  }

})(window);
