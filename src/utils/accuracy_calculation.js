const BigNumber = require('@/js_sdk/bignumber.js')

// 加法
export function toolPlusNum(num1, num2) {
  return new BigNumber(Number(num1), 10).plus(Number(num2), 10).toFixed(2).toString()
}

// 减法
export function toolMinusNum(num1, num2) {
  return new BigNumber(Number(num1), 10).minus(Number(num2), 10).toFixed(2).toString()
}

// 乘法
export function toolTimesNum(num1, num2) {
  return new BigNumber(Number(num1), 10).times(Number(num2), 10).toString()
}

// 除法
export function toolDivNum(num1, num2) {
  return new BigNumber(Number(num1), 10).div(Number(num2), 10).toString()
}
