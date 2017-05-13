var store = require('../lib/store')
var feedback = require('../lib/feedback')

module.exports = {
  name: 'logout',
  command: function whoami () {
    store.trash(function (err, config) {
      feedback.error(err)
      feedback.success('logged out')
    })
  }
}
