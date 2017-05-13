var read = require('read')
var store = require('../lib/store')
var feedback = require('../lib/feedback')
var getInfo = require('./info').command

function login (options, callback) {
  var sitename
  var password

  read({ prompt: 'Your neocities site name:' }, onSitename)

  function onSitename (err, _sitename) {
    feedback.error(err)

    if (_sitename === '') feedback.error('no site name entered')

    sitename = _sitename

    read({ prompt: 'Your neocities site password:', silent: true, replace: '*' }, onPass)
  }

  function onPass (err, _password) {
    feedback.error(err)

    password = _password

    storeCredentials()
  }

  function storeCredentials () {
    store.write({ sitename, password }, function (err) {
      feedback.error(err)

      getInfo(null, function (err, info) {
        if (err) {
          return store.trash(function (trashErr) {
            feedback.error(trashErr)
            feedback.error(err)
          })
        }

        feedback.success('logged in as', info.sitename)
      })
    })
  }
}

module.exports = {
  name: 'login',
  usage: true,
  command: login
}
