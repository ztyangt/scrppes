
var roleHatch = {
  run: function () {
    for (var name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('清除不存在的打工人内存:', name);
      }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('矿工数量: ' + harvesters.length);

    if (harvesters.length < 3) {
      var newName = `矿工${harvesters.length + 1}号`;
      console.log('正在孵化: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
        { memory: { role: 'harvester' } });
    }

    if (Game.spawns['Spawn1'].spawning) {
      var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
      Game.spawns['Spawn1'].room.visual.text(
        '🛠️' + '正在孵化: ' + newName,
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        { align: 'left', opacity: 0.8 });
    }
  }
}

module.exports = roleHatch