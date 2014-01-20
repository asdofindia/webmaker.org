define(['jquery', 'base/gallery'],
  function ($, Gallery) {
    'use strict';

    new Gallery({
      makeView: 'make-starter-make.html',
      stickyPrefix: 'webmaker:template-',
      defaultSearch: {
        tags: ['webmaker:template']
      }
    });

  });
