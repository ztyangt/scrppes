const roleCtl = require('controller.role')
const roleHarvester = require('work.harvester');

var roleBuilder = {

  /** 
   * @param {Creep} creep 
   **/
  run: function (creep) {

    if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.building = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
      creep.memory.building = true;
      creep.say('🚧 build');
    }

    if (creep.memory.building) {

      const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (roleCtl.liveCount.harvester > 2 && targets.length) {
        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        } else {
          creep.say("加油🧱")
        }
      } else {
        roleHarvester.run(creep)
      }
    }
    else {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    }
  }
};

module.exports = roleBuilder;