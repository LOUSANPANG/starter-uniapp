<script>
import { postLogin } from '@/services/api/login.js'
import { Storage } from '@/utils/storage.js'

export default {
  name: 'Login',

  data() {
    return {
      wxcode: null,
    }
  },

  created() {
    this.getCode()
  },

  methods: {
    // 获取wxcode
    getCode() {
      uni.getProvider({
        service: 'oauth',
        success: (res) => {
          console.log('服务供应商:', res.provider)
          console.log('服务供应商服务对象:', res.providers)

          if (~res.provider.indexOf('weixin')) {
            uni.login({
              provider: 'weixin',
              onlyAuthorize: true,
              success: (loginRes) => {
                console.log('uni.login接口调用成功:', JSON.stringify(loginRes))
                this.wxcode = loginRes.code
              },
              fail() {
                this.$TOAST('获取wxcode失败')
              },
            })
          }
          else {
            this.$TOAST('服务供应商不支持微信登录')
          }
        },
        fail() {
          this.$TOAST('获取服务供应商失败')
        },
      })
    },

    // 点击登录按钮
    async handleLogin(e) {
      uni.showLoading({
        title: '正在登录...',
        mask: true,
      })

      // 微信小程序
      // #ifdef MP-WEIXIN
      console.log('微信小程序点击获取手机号', e)
      if (e.detail.errMsg === 'getPhoneNumber:ok') {
        await this.login({
          iv: e.detail.iv,
          encryptedData: e.detail.encryptedData,
          // code: e.detail.code || ''
          code: this.wxcode,
        })
      }
      else {
        this.$TOAST('授权失败，请重新授权')
      }
      // #endif

      // APP
      // #ifdef APP
      await this.login({
        wxcode: this.wxcode,
      })
      // #endif

      uni.hideLoading()
    },

    // 登录接口
    async login(data) {
      postLogin(data)
        .then((res) => {
          const sessionId = res.data.sessonId
          Storage.setSessionId(sessionId)
          uni.navigateBack()
        })
    },
  },
  // /end methods
}
</script>

<template>
  <view class="login">
    <!-- #ifdef MP-WEIXIN -->
    <button
      class="u-reset-button u-submit"
      open-type="getPhoneNumber"
      @getphonenumber="handleLogin"
    >
      登录
    </button>
    <!-- #endif -->

    <!-- #ifdef APP -->
    <button class="u-reset-button u-submit" @click="handleLogin">
      登录
    </button>
    <!-- #endif -->
  </view>
</template>

<style scoped lang="scss">
	.u-submit {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 512rpx;
		height: 124rpx;
		font-weight: 400;
		font-family: 'PingFang SC';
		font-size: 44rpx;
		letter-spacing: 1rpx;
		color: #FFFFFF;
		background: #5C68DA;
		border-radius: 40rpx;
	}
</style>
