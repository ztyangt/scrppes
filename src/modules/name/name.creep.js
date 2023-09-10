
var creepName = {

  color: {
    harvester: '#fbe37c',
    upgrader: '#f64162',
    builder: '#1c80fa',
  },

  run: function () {
    for (const creep in Game.creeps) {
      const creepObj = Game.creeps[creep]
      const left = Math.round(creep.length / 12)
      !creepObj.spawning && creepObj.room.visual.text(
        creepObj.name,
        creepObj.pos.x - left,
        creepObj.pos.y - 1,
        { align: 'top', opacity: 0.8, color: this.color[creepObj.memory.role] });
    }
  }
};

module.exports = creepName;