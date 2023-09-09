var roleInit = require('role.index');
var viewInit = require('view.index')


module.exports.loop = function () {
  roleInit.init()
  viewInit.init()
}