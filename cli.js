#! /usr/bin/env node

var subcommand = require('subcommand')

var match = subcommand({
  root: require('./commands/root'),
  commands: [
    require('./commands/login'),
    require('./commands/logout'),
    require('./commands/whoami'),

    require('./commands/info'),
    // require('./commands/upload'),
    // require('./commands/delete'),
    // require('./commands/list'),

    require('./commands/help'),
    require('./commands/version')
  ]
})

match(process.argv.slice(2))
