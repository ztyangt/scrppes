
var creepView = {

  run: function () {
    for (var creep in Game.creeps) {
      var creepObj = Game.creeps[creep]
      var left = Math.round(creep.length / 12)
      creepObj.room.visual.text(
        creepObj.name,
        creepObj.pos.x - left,
        creepObj.pos.y - 1,
        { align: 'top', opacity: 0.8, font: '16px', color: 'green' });
    }
  }
};

module.exports = creepView;