var chalk = require('chalk')

module.exports.error = function handleErr (err) {
  if (err) {
    console.log(chalk.red('✘'), err.message || err)
    process.exit(1)
  }
}

module.exports.success = function handleSuccess () {
  var args = [].slice.call(arguments)
  console.log.apply(this, [chalk.green('✔︎')].concat(args))
}
