
const countMethods = require("count")

const roleCtl = {

  count: {
    // 矿工数量
    harvester: 10,
    // 建造工数量
    builder: 10,
    // 升级工数量
    upgrader: 4,
  },

  liveCount: {
    harvester: 0,
    upgrader: 0,
    builder: 0,
  },

  getLiveCount: function () {
    this.liveCount.harvester = countMethods.liveCreepNum('harvester', '矿工');
    this.liveCount.upgrader = countMethods.liveCreepNum('upgrader', '升级工');
    this.liveCount.builder = countMethods.liveCreepNum('builder', '建造工');
  }


};

module.exports = roleCtl;