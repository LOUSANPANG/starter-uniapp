// @description {toLogin} 权限问题跳转登录页

function getCurrentPageUrl() {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const url = currentPage.route
  return url
}

export function toLogin() {
  const path = getCurrentPageUrl()
  if (!path.includes('/login/login')) {
    uni.navigateTo({
      url: '/pages/login/login',
    })
  }
}
