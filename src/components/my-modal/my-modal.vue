<script>
/**
 * @description: 校验密码弹窗的模态框
 * @param {string} title 标题
 * @param {string} describe 描述
 * @param {string} confirm 确认按钮文字
 * @param {string} cancel 取消按钮文字
 * @event {Function} modalConfirm 点击确认按钮时触发
 * @event {Function} modalCancel 点击取消按钮时触发
 */
export default {
  data() {
    return {
      show: false,
      title: '',
      describe: '',
      confirm: '',
      cancel: '',
    }
  },

  methods: {
    // 打开弹窗
    open(data) {
      this.show = true
      this.title = data.title
      this.describe = data.describe
      this.confirm = data.confirm
      this.cancel = data.cancel
    },

    // 取消按钮
    handleClose() {
      this.show = false
      this.$emit('modalCancel', this.cancel)
    },

    // 确认按钮
    handleConfirm() {
      this.show = false
      this.$emit('modalConfirm', this.confirm)
    },
  },
}
</script>

<template>
  <view v-if="show" class="flex flex-row-center verify-modal">
    <view
      class="modal"
      :style="{ padding: describe ? '40rpx' : '60rpx 40rpx 40rpx' }"
    >
      <!-- 标题 -->
      <view
        v-if="title"
        class="modal_title"
        :style="{ marginBottom: describe ? '16rpx' : '60rpx' }"
      >
        {{ title }}
      </view>

      <!-- 描述 -->
      <view v-if="describe" class="modal_describe">
        {{ describe }}
      </view>

      <!-- 按钮 -->
      <view class="flex modal_button">
        <view
          v-if="cancel"
          class="flex flex-row-center button-cancel"
          @click="handleClose"
        >
          {{ cancel }}
        </view>
        <view
          v-if="confirm"
          class="flex flex-row-center button-confirm"
          @click="handleConfirm"
        >
          {{ confirm }}
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}
.flex-row-center {
  justify-content: center;
}

.verify-modal {
  position: fixed;
  z-index: 9999999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  .modal {
    box-sizing: border-box;
    width: 560rpx;
    background: #ffffff;
    border-radius: 12rpx;
    &_title {
      width: 100%;
      font-size: 34rpx;
      font-weight: 600;
      text-align: center;
      color: #0d0d0d;
      line-height: 50rpx;
    }
    &_describe {
      margin-bottom: 40rpx;
      width: 100%;
      font-size: 28rpx;
      text-align: center;
      color: #0d0d0d;
      line-height: 44rpx;
    }
    &_button {
      justify-content: space-around;
      width: 100%;
      .button-cancel {
        width: 200rpx;
        height: 64rpx;
        border: 1px solid #cccccc;
        border-radius: 33.4rpx;
        background: #ffffff;
        font-size: 26rpx;
        font-weight: 400;
        color: #0d0d0d;
        line-height: 37rpx;
      }
      .button-confirm {
        width: 200rpx;
        height: 64rpx;
        border-radius: 32rpx;
        background: #ff1b0f;
        font-size: 26rpx;
        font-weight: 500;
        color: #ffffff;
        line-height: 37rpx;
      }
    }
  }
}
</style>
