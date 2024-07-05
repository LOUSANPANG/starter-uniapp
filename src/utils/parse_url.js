// hash 解析参数
export function parseHashUrl(tagetParams) {
  const parmas = location.hash.indexOf('?')
  const query = location.hash.substring(parmas + 1)
  const queryArr = query.split('&')

  for (let i = 0; i < queryArr.length; i++) {
    const queryPair = queryArr[i].split('=')
    if (queryPair[0] === tagetParams) {
      return queryPair[1]
    }
  }
  return false
}

// history 解析参数
export function parseHistoryUrl(tagetParams) {
  const query = window.location.search.substring(1)
  const queryArr = query.split('&')

  for (let i = 0; i < queryArr.length; i++) {
    const queryPair = queryArr[i].split('=')
    if (queryPair[0] === tagetParams) {
      return queryPair[1]
    }
  }
  return false
}

// history去除url制定参数
export function removeHistoryUrlParams(name) {
  const loca = window.location
  const baseUrl = `${loca.origin + loca.pathname}?`
  const query = decodeURIComponent(loca.search.split('?')[1])
  if (!query) {
    return loca
  }
  if (loca.href.includes(name)) {
    const obj = {}
    const arr = query.includes('&') ? query.split('&') : [query]
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=')
      obj[arr[i][0]] = arr[i][1]
    };
    delete obj[name]
    const url = baseUrl + JSON.stringify(obj).replace(/["{}]/g, '').replace(/:/g, '=').replace(/,/g, '&')
    return url
  }
}
