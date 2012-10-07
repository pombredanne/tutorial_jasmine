#!/bin/bash

BASE_DIR=`dirname $0`
NODE_RUNTIME='../tutorial_ci/node/bin'


echo ""
echo "Starting Testacular Server (http://vojtajina.github.com/testacular)"
echo "-------------------------------------------------------------------"

$NODE_RUNTIME/testacular start $BASE_DIR/../testacular.conf.js $*
