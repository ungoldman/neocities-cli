var pkg = require('../package.json')

module.exports = {
  name: 'version',
  command: function version () {
    console.log(pkg.version)
  }
}
