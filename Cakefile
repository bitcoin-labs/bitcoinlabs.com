
{spawn, exec} = require 'child_process'


run = (str) ->
  chunks = str.split ' '
  cmd = chunks[0]
  args = chunks[1...]
  p = spawn cmd, args
  p.stdout.on 'data', (data) -> process.stdout.write data
  p.stderr.on 'data', (data) -> process.stderr.write data


task 'watch', () ->
  run "coffee -cwo lib src"
  run "stylus -c -w lib/public"
