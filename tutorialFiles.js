tutorialFiles = {
  'appSrc': [
    'app/js/credit_card.js',
    'app/js/jukebox.js'
  ],

  'appTest': [
    'test/unit/credit_card_spec.js',
    'test/unit/jukebox_spec.js',
    'test/unit/jukebox_test.js'
  ]
};

// Execute only in slim-jim
if (typeof JASMINE_ADAPTER !== 'undefined') {
  // Testacular config
  var mergedFiles = [];
  angularFiles.jstd.forEach(function(file) {
    // replace @ref
    var match = file.match(/^\@(.*)/);
    if (match) {
      var deps = angularFiles[match[1]];
      if (!deps) {
        console.log('No dependency:' + file)
      }
      mergedFiles = mergedFiles.concat(deps);
    } else {
      mergedFiles.push(file);
    }
  });

  files = [JASMINE, JASMINE_ADAPTER];

  mergedFiles.forEach(function(file){
    if (/jstd|jasmine/.test(file)) return;
    files.push(file);
  });


  exclude = angularFiles.jstdExclude;

  autoWatch = true;
  autoWatchInterval = 1;
  logLevel = LOG_INFO;
  logColors = true;
}