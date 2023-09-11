const roleHatch = require('role.hatch');
const roleCtl = require('controller.role')

const roleInit = {

  init: function () {
    roleCtl.getLiveCount()
    roleHatch.run()
  }
};

module.exports = roleInit;