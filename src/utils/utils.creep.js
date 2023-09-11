module.exports = {

  /**
   * 采矿
   * @param {Screep} creep 打工人
   * @param {*} source 矿源
   */
  harvestSource(creep, source) {
    if (source) {
      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source)
      }
    } else {
      // 未指定矿源
      const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
      if (target) {
        if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      }
    }
  },


  /**
   * 获取当前creep数量
   * @param {string} role 角色
   * @param {*} name 角色名
   * @returns 
   */
  liveCreepNum: function (role, name) {
    const result = _.filter(Game.creeps, (creep) => creep.memory.role === role).length
    console.log(`当前${name}数量：${result}`)
    return result
  }
}

