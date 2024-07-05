import Storage from '@/utils/custom_storage.js'
import { toLogin } from '@/services/services-base/tologin.js'

const stationErrorMsg = '获取失败，点击重试'

/**
 * 进行位置授权
 * 进行登录授权
 */
export default {
  data() {
    return {
      longitlatit: null,
      token: Storage.getToken(),
    }
  },

  methods: {
    isAuthorize() {
      this.token = Storage.getToken()
      if (!this.token) {
        this.navLogin()
        return true
      }
      if (!this.longitlatit)
        this.getAuthorize()
    },

    // 判断授权
    getAuthorize(fn) {
      uni.authorize({
        scope: 'scope.userLocation',
        success: () => {
          this.getLoaction(fn)
        },
        fail: () => {
          uni.showModal({
            content: '检测到您没打开获取位置功能权限，是否去设置打开？',
            confirmText: '确认',
            cancelText: '取消',
            success: (res) => {
              if (res.confirm) {
                uni.openSetting({
                  success: (res) => {
                    this.getLoaction(fn)
                  },
                })
              }
            },
            fail: () => {
              // 拒绝授权位置信息
              this.stationName = stationErrorMsg
            },
          })
        },
      })
    },

    // 获取位置信息
    getLoaction(fn) {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          console.log('获取经纬度===>', res)
          const { longitude, latitude } = res
          const longitlatit = [longitude, latitude]
          this.longitlatit = longitlatit
          fn && fn()
        },
        fail: () => {
          // 授权位置失败
          this.stationName = stationErrorMsg
        },
      })
    },

    // 获取登录
    navLogin() {
      toLogin()
    },

  },
}
