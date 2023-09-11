const countMethods = {
  liveCreepNum: function (role, name) {
    const result = _.filter(Game.creeps, (creep) => creep.memory.role === role).length
    console.log(`当前${name}数量：${result}`)
    return result
  }
}

module.exports = countMethods