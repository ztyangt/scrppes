var roleHatch = require('role.hatch');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

var roleInit = {

  init: function (creep) {

    roleHatch.run()

    for (var name in Game.creeps) {
      var creep = Game.creeps[name];
      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
      }
      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      }
    }
  }
};

module.exports = roleInit;