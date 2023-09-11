const roleCtl = require('controller.role')
const roleHarvester = require('work.harvester');
const roleUpgrader = require('work.upgrader');
const roleBuilder = require('work.builder');

const workInit = {

  init: function () {


    for (const name in Game.creeps) {
      const creep = Game.creeps[name];
      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
      }

      if (creep.memory.role == 'builder') {
        roleCtl.liveCount.harvester > 2
        roleBuilder.run(creep);
      }

      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      }

    }
  }
};

module.exports = workInit;