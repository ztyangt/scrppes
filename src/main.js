require('config.index')
require('api.index')
require('mount.index')
require('ctl.index')

const creepHatch = require("creep.hatch")


module.exports.loop = function () {
  // 遍历所有 creep 并执行上文中拓展的 work 方法

  console.log("time: ", Game.time)
  Object.values(Game.creeps).forEach(creep => {
    creep.clear()
    creep.work()
  })

  creepHatch.run()
}

