// 153****0730
export function formatEncryptPhone(phone) {
  if (!phone)
    return ''
  const newPhone = String(phone).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  return newPhone
}

// 153 xxxx xxxx
export function formatGapPhone(phone) {
  if (!phone)
    return ''
  const newPhone = String(phone).replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
  return newPhone
}

// 1234 5678 9012 3456 789
export function formatGapCardNo(cardNo) {
  return String(cardNo).replace(/(\d{4})/g, '$1 ').trim()
}

// get请求参数 {a:1, b:2} => ?a=1&b=2
export function formatGetParams(params) {
  let result = ''
  for (const key in params) {
    let value = params[key]
    if (typeof value == 'object') {
      value = JSON.stringify(value)
    }
    // result += `${key}=${encodeURIComponent(value)}&`
    result += `${key}=${value}&`
  }
  return `?${result.slice(0, -1)}`
}

/**
 * 筛选字段
 * fieldCustom { 'a': '订单量' }
 * fieldService { 'a': 1, 'b': 2 }
 * => { '订单量': 1 }
 */
export function formatField(fieldCustom, fieldService) {
  const fieldKeys = Object.keys(fieldCustom)
  const newField = {}

  fieldKeys.forEach((item) => {
    newField[fieldCustom[item]] = fieldService[item]
  })

  return newField
}

// xxxTxxZ => xxx xx xx
export function formatTZToDate(time) {
  if (!time)
    return time
  const date = time.substr(0, 10)
  const hours = time.substring(11, 13)
  const minutes = time.substring(14, 16)
  const seconds = time.substring(17, 19)
  let timeFlag = `${date} ${hours}:${minutes}:${seconds}`
  timeFlag = timeFlag.replace(/-/g, '/')
  timeFlag = new Date(timeFlag)
  timeFlag = new Date(timeFlag.getTime() + 8 * 3600 * 1000)
  timeFlag = `${timeFlag.getFullYear()}-${(timeFlag.getMonth() + 1) < 10
? `0${timeFlag.getMonth() + 1}`
: (
			timeFlag.getMonth() + 1)}-${timeFlag.getDate() < 10 ? `0${timeFlag.getDate()}` : timeFlag.getDate()
		} ${timeFlag.getHours() < 10 ? `0${timeFlag.getHours()}` : timeFlag.getHours()}:${timeFlag
		.getMinutes() < 10
? `0${timeFlag.getMinutes()}`
: timeFlag.getMinutes()}:${timeFlag.getSeconds() < 10
			? `0${timeFlag.getSeconds()}`
: timeFlag.getSeconds()}`
  return timeFlag
}

// 时间戳转日期
export function formaterTimestampToDate(time) {
  const date = new Date(time * 1000)
  const Y = `${date.getFullYear()}-`
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`
  const D = date.getDate() < 10 ? `0${date.getDate()} ` : `${date.getDate()} `
  const h = date.getHours() < 10 ? `0${date.getHours()}:` : `${date.getHours()}:`
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
  return Y + M + D + h + m + s
}

// 日期转时间戳
export function formatDateToTimestamp(date) {
  if (!date)
    return

  return new Date(date).getTime()
}

// 计算日期距当前时间多少天
export function formaterDateDiffer(Date_start) {
  let date1 = new Date() // date1开始时间
  let date2 = new Date(Date_start) // date2当前时间
  date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
  date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
  const diff = date1.getTime() - date2.getTime() // 目标时间减去当前时间
  const diffDate = diff / (24 * 60 * 60 * 1000) // 计算当前时间与结束时间之间相差天数
	 return diffDate
}
