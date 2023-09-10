
var creepName = require('name.creep');
var buildName = require('name.build');


var nameInit = {
  init: function () {
    creepName.run()
    buildName.run()
  }
}

module.exports = nameInit;