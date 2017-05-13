var store = require('../lib/store')
var feedback = require('../lib/feedback')

module.exports = {
  name: 'whoami',
  command: function whoami () {
    store.read(function (err, config) {
      feedback.error(err)

      if (!config || !config.sitename) {
        feedback.error('not currently logged in')
      }

      console.log(config.sitename)
    })
  }
}
