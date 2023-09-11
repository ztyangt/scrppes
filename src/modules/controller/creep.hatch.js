
module.exports = {
  run: function () {

    global.creepList.forEach(item => {
      // console.log("DEBUG: !Memory.creeps[item.name]", Memory.creeps[item.name].name)
      if (!Memory.creeps[item.name] || !Memory.creeps[item.name].name) {
        Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], item.name, {
          memory: { configName: item.configName },
        });
      }
    })

    if (Game.spawns["Spawn1"].spawning) {
      var spawningCreep = Game.creeps[Game.spawns["Spawn1"].spawning.name];
      Game.spawns["Spawn1"].room.visual.text(
        "🛠️" + "正在孵化: " + spawningCreep.name,
        Game.spawns["Spawn1"].pos.x + 1,
        Game.spawns["Spawn1"].pos.y,
        { align: "left", opacity: 0.8 }
      );
    }
  },
};

