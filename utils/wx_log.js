/**
 * 实时日志
 * var log = require('')
 * log.info('')
 * log.warn('')
 * log.error('')
 * log.setFilterMsg('')
 * log.addFilterMsg('')
 */

var log = uni.getRealtimeLogManager ? uni.getRealtimeLogManager() : null

module.exports = {
  debug() {
    if (!log) return
		// #ifdef MP-WEIXIN
    log.debug.apply(log, arguments)
		// #endif
  },
  info() {
    if (!log) return
		// #ifdef MP-WEIXIN
    log.info.apply(log, arguments)
		// #endif
  },
  warn() {
    if (!log) return
		// #ifdef MP-WEIXIN
    log.warn.apply(log, arguments)
		// #endif
  },
  error() {
    if (!log) return
		// #ifdef MP-WEIXIN
    log.error.apply(log, arguments)
		// #endif
  },
  setFilterMsg(msg) { // 从基础库2.7.3开始支持
    if (!log || !log.setFilterMsg) return
    if (typeof msg !== 'string') return
		// #ifdef MP-WEIXIN
    log.setFilterMsg(msg)
		// #endif
  },
  addFilterMsg(msg) { // 从基础库2.8.1开始支持
    if (!log || !log.addFilterMsg) return
    if (typeof msg !== 'string') return
		// #ifdef MP-WEIXIN
    log.addFilterMsg(msg)
		// #endif
  }
}
