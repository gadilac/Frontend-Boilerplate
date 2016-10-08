
// @koala-prepend "../vendor/aos/dist/aos.js"
// @koala-prepend "../vendor/slick-carousel/slick/slick.js"
// @koala-prepend "../vendor/retinajs/dist/retina.min.js"
// @koala-prepend "../vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js"
// @koala-prepend "../vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js"
// @koala-prepend "../vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js"


/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width


(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();
