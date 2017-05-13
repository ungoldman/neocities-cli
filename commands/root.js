var help = require('./help')
var version = require('./version')

module.exports = {
  command: function (args) {
    if (args.version) version.command(args)
    help.command(args)
  },
  options: [
    {
      name: 'version',
      abbr: 'v'
    },
    {
      name: 'help',
      abbr: 'h',
      boolean: false,
      default: null,
      help: 'Usage information'
    }
  ]
}
