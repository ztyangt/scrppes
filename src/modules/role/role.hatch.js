
var roleHatch = {

  // 矿工数量
  harvesterCount: 5,
  // 升级工数量
  upgraderCount: 4,
  // 建造工数量
  builderCount: 5,

  run: function () {
    for (var name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('清除不存在的打工人内存:', name);
      }
    }



    // 孵化旷工
    _.difference(_.range(1, this.harvesterCount + 1).map(number => `旷${number}`), Object.keys(Game.creeps)).reverse().forEach(item => {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], item,
        { memory: { role: 'harvester' } });
    })

    // 孵化升级工
    _.difference(_.range(1, this.upgraderCount + 1).map(number => `升${number}`), Object.keys(Game.creeps)).reverse().forEach(item => {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], item,
        { memory: { role: 'upgrader' } });
    })

    // 孵化建造工
    _.difference(_.range(1, this.builderCount + 1).map(number => `建${number}`), Object.keys(Game.creeps)).reverse().forEach(item => {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], item,
        { memory: { role: 'builder' } });
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