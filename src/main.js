var roleInit = require('role.index');
var viewInit = require('name.index')
var workInit = require('work.index')


module.exports.loop = function () {
  console.log(Game.time)
  roleInit.init()
  workInit.init()
  // viewInit.init()
}