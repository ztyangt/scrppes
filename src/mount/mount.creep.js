/**
 * 引入 creep 配置项
 * 其键为角色名（role），其值为对应角色的逻辑生成函数
 */
const roles = {
  harvester: require('role.harvester'),
  builder: require('role.builder'),
  upgrader: require('role.upgrader')
}

// 添加 work 方法
Creep.prototype.work = function () {

  // ------------------------ 第一步：获取 creep 执行逻辑 ------------------------
  // 获取对应配置项
  const creepConfig = creepApi.get(this.memory.configName)
  // 检查 creep 内存中的配置是否存在
  if (!creepConfig) {
    console.log(`creep ${this.name}找不到活干 ${this.memory.configName}`)
    this.say('我找不到活干！')
    return
  }
  const creepLogic = roles[creepConfig.role](...creepConfig.args)

  // ------------------------ 第二步：执行 creep 准备阶段 ------------------------

  // 没准备的时候就执行准备阶段
  if (!this.memory.ready) {
    // 有准备阶段配置则执行
    if (creepLogic.prepare) {
      this.memory.ready = creepLogic.prepare(this)
    }
    // 没有就直接准备完成
    else this.memory.ready = true
    return
  }


  // ------------------------ 第三步：执行 creep 工作阶段 ------------------------

  let stateChange = true
  // 执行对应阶段
  // 阶段执行结果返回 true 就说明需要更换 working 状态
  if (this.memory.working) {
    creepLogic.target && (stateChange = creepLogic.target(this))
  } else {

    creepLogic.source && (stateChange = creepLogic.source(this))

  }

  // 状态变化了就切换工作阶段
  if (stateChange) this.memory.working = !this.memory.working
}

/**
 * 清理内存
 */
Creep.prototype.clear = function () {
  if (!Game.creeps[this.name]) {
    delete Memory.creeps[this.name];
    console.log("清除不存在的打工人内存:", this.name);
  }
}

