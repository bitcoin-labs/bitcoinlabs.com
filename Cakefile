
{noisyExec} = require 'tafa-misc-util'


watch = () ->
  noisyExec "coffee -cwo lib src"
  noisyExec "stylus -c -w lib/public"

task 'watch', watch

task 'dev', () ->
  watch()
  noisyExec "hotnode lib/server.js"




