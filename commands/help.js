var usage = `
USAGE:
  neocities {command} [options]

COMMANDS:
  ✔︎   login       log in to neocities
  ✔︎   logout      log out of neocities
  ✔︎   whoami      show which user you're logged in as

  ✘   upload      upload a file
  ✘   delete      delete a file
  ✘   list        list all files
  ✔︎   info        retrieve info about a web site

  ✔︎   version     show cli version
  ✔︎   help        show this help message

✔︎ = implemented
✘ = not yet implemented
`

module.exports = {
  name: 'help',
  command: function help () {
    console.log(usage)
  }
}
