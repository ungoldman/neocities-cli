var client = require('../lib/client')
var feedback = require('../lib/feedback')

module.exports = {
  name: 'info',
  command: function info (args, cb) {
    if (typeof cb !== 'function') cb = null
    console.log(args)
    var sitename = args && args._ && args._.length && args._.length > 0
      ? args._[0]
      : null

    client(function (err, api) {
      if (err && cb) return cb(err)
      feedback.error(err)

      api.info(sitename, function (response) {
        var err = !response || !response.result
          ? 'no response'
          : response.result === 'error'
            ? response
            : null

        if (cb) return cb(err, response)

        feedback.error(err)
        console.log(response.info)
      })
    })
  }
}
