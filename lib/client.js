var NeoCities = require('neocities')
var store = require('./store')

module.exports = function (cb) {
  store.read(function (err, config) {
    if (err) cb(err)

    if (!config || !config.sitename || !config.password) {
      cb(new Error('please login first'))
    }

    cb(null, new NeoCities(config.sitename, config.password))
  })
}
