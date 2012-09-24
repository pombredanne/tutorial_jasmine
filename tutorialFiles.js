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

  files = [JASMINE, JASMINE_ADAPTER];

  autoWatch = false;
  autoWatchInterval = 1;
  logLevel = LOG_INFO;
  logColors = true;
}