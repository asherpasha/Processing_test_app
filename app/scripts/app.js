(function(window, $, undefined) {
  'use strict';

  console.log('Hello, Processing_test_app!');
  // Load the PDE
  var allScripts, i, re, pdeURL;
  
  allScripts = document.querySelectorAll('script');
  re = /^(.*)(\/bower_components\/Araport_bower_test)\/hello\.js??(.*)?$/;
  for (i = 0; i < allScripts.length && ! pdeURL; i++) {
    if (re.test(allScripts[i].src)) {	  
      var match = re.exec(allScripts[i].src);
      pdeURL = match[1] + match[2] + '/app.pde';
    }
  }

  if (pdeURL) {
    $('#can').attr('data-processing-sources', pdeURL);
  }
})(window, jQuery);
