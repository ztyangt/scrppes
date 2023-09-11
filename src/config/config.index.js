const countConfig = require("config.count")

global.creepList = _.flatten(_.map(countConfig.creep, ({ name, count, role }, configName) => {
  return _.times(count, i => {
    return { name: `${name}${i + 1}号`, configName: configName, role: role, roleName: name }
  }).reverse();
}))


