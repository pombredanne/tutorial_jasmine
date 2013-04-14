#!/bin/bash

BASE_DIR=`dirname $0`
NODE_RUNTIME='../tutorial_ci/runtime/node/bin'


echo ""
echo "Starting Karma / Testacular Server (http://karma-runner.github.com)"
echo "-------------------------------------------------------------------"

$NODE_RUNTIME/karma start $BASE_DIR/../karma.conf.js $*
