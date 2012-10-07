basePath = '.';

files = [
  JASMINE,
  JASMINE_ADAPTER,

  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'junit.xml',
  suite: 'unit'
};
