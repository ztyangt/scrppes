const roleCtl = require('controller.role')


var roleHatch = {

  run: function () {
    for (var name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('清除不存在的打工人内存:', name);
      }
    }



    // 孵化升级工
    _.difference(_.range(1, roleCtl.count.upgrader + 1).map(number => `升级工${number}号`), Object.keys(Game.creeps)).reverse().forEach(item => {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], item,
        { memory: { role: 'upgrader' } });
    })

    // 孵化建造工
    _.difference(_.range(1, roleCtl.count.builder + 1).map(number => `建造工${number}号`), Object.keys(Game.creeps)).reverse().forEach(item => {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], item,
        { memory: { role: 'builder' } });
    })

    // 孵化旷工
    _.difference(_.range(1, roleCtl.count.harvester + 1).map(number => `旷工${number}号`), Object.keys(Game.creeps)).reverse().forEach(item => {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], item,
        { memory: { role: 'harvester' } });
    })


    if (Game.spawns['Spawn1'].spawning) {
      var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
      Game.spawns['Spawn1'].room.visual.text(
        '🛠️' + '正在孵化: ' + spawningCreep.name,
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        { align: 'left', opacity: 0.8 });
    }
  }
}

module.exports = roleHatch