var roleHarvester = require('work.harvester');
var roleUpgrader = require('work.upgrader');
var roleBuilder = require('work.builder');

var workInit = {

  init: function (creep) {

    for (var name in Game.creeps) {
      var creep = Game.creeps[name];
      if (creep.memory.role == 'harvester') {
        creep.say("🧱")
        roleHarvester.run(creep);
        // roleHarvester.gohome(creep);
      }
      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      }
      if (creep.memory.role == 'builder') {
        creep.say('⛑')
        roleBuilder.run(creep);
      }
    }
  }
};

module.exports = workInit;